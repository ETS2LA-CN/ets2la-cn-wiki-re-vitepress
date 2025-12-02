import path from "node:path";
import fs from "node:fs";

const DIR_PATH = path.resolve();
const WHITE_LIST: readonly string[] = [
  "index.md",
  ".vitepress",
  "node_modules",
  ".idea",
  "assets",
];

type SidebarItemEx = {
  text: string;
  link?: string;
  items?: SidebarItemEx[];
  collapsible?: boolean;
};

const isDirectory = (p: string): boolean => fs.lstatSync(p).isDirectory();

const intersections = (arr1: string[], arr2: string[]): string[] =>
  Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

const getTitleFromMarkdown = (fp: string): string | null => {
  try {
    const content = fs.readFileSync(fp, "utf-8");
    const m = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
    if (!m) return null;
    const fm = m[1];
    const line = fm.split(/\r?\n/).find((l) => /^\s*title:\s*/.test(l));
    if (!line) return null;
    const raw = line.replace(/^\s*title:\s*/, "").trim();
    return raw.replace(/^['"]|['"]$/g, "");
  } catch {
    return null;
  }
};

function getList(params: string[], path1: string, pathname: string): SidebarItemEx[] {
  const res: SidebarItemEx[] = [];
  for (let file in params) {
    const dir = path.join(path1, params[file]);
    const isDir = isDirectory(dir);
    if (isDir) {
      const files = fs.readdirSync(dir);
      const idx = path.join(dir, "index.md");
      const groupTitle = fs.existsSync(idx) && !isDirectory(idx) ? getTitleFromMarkdown(idx) || params[file] : params[file];
      res.push({
        text: groupTitle,
        collapsible: true,
        items: getList(files, dir, `${pathname}/${params[file]}`),
      });
    } else {
      const name = path.basename(params[file]);
      const suffix = path.extname(params[file]);
      if (suffix !== ".md") {
        continue;
      }
      const title = getTitleFromMarkdown(dir) || name;
      res.push({
        text: title,
        link: `${pathname}/${name}`,
      });
    }
  }
  return res;
}

export const set_sidebar = (pathname: string): SidebarItemEx[] => {
  const dirPath = path.join(DIR_PATH, pathname);
  const files = fs.readdirSync(dirPath);
  const items = intersections(files, WHITE_LIST as string[]);
  return getList(items, dirPath, pathname);
};

