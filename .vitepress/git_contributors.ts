import { execSync } from "node:child_process";

export type PageContributor = {
  name: string;
  username: string | null;
  avatar: string | null;
  commits: number;
  profileUrl: string | null;
};

// 将已知 git 身份归并到 GitHub 用户名，避免同一人显示成多个条目
const GITHUB_ALIAS: Record<string, string> = {
  "nulijiazaizhong@outlook.com": "nulijiazaizhong",
  "127476147+nulijiazaizhong@users.noreply.github.com": "nulijiazaizhong",
  "nulijiazaizhong@users.noreply.github.com": "nulijiazaizhong",
  "3317732779@qq.com": "BGYdook",
};

const DISPLAY_NAME: Record<string, string> = {
  nulijiazaizhong: "晚安",
  BGYdook: "BGYdook",
};

const githubFromEmail = (email: string): string | null => {
  const lower = email.toLowerCase();
  if (GITHUB_ALIAS[lower]) return GITHUB_ALIAS[lower];
  const m = lower.match(/(?:\d+\+)?([^@]+)@users\.noreply\.github\.com$/);
  return m ? m[1] : null;
};

const normalizeKey = (name: string, email: string): string => {
  return githubFromEmail(email) || email.toLowerCase() || name.toLowerCase();
};

export function getPageContributors(relativePath: string): PageContributor[] {
  if (!relativePath || !relativePath.endsWith(".md")) return [];

  let out = "";
  try {
    out = execSync(
      `git log --follow --format=%an%x00%ae%x00 -- "${relativePath.replace(/"/g, "")}"`,
      { encoding: "utf-8", stdio: ["ignore", "pipe", "ignore"] }
    );
  } catch {
    return [];
  }

  const map = new Map<
    string,
    { name: string; email: string; username: string | null; commits: number }
  >();

  for (const line of out.split("\n")) {
    if (!line.trim()) continue;
    const [name = "", email = ""] = line.split("\u0000");
    const key = normalizeKey(name, email);
    const username = githubFromEmail(email);
    const prev = map.get(key);
    if (prev) {
      prev.commits += 1;
    } else {
      map.set(key, { name, email, username, commits: 1 });
    }
  }

  return Array.from(map.values())
    .map((item) => {
      const username = item.username;
      const displayName =
        (username && DISPLAY_NAME[username]) || item.name || username || "未知";
      return {
        name: displayName,
        username,
        avatar: username ? `https://github.com/${username}.png?size=64` : null,
        commits: item.commits,
        profileUrl: username ? `https://github.com/${username}` : null,
      };
    })
    .sort((a, b) => b.commits - a.commits || a.name.localeCompare(b.name));
}
