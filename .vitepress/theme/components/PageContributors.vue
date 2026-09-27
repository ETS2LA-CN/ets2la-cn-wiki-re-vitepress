<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import type { PageContributor } from "../git_contributors";

const { page } = useData();

const contributors = computed<PageContributor[]>(() => {
  const data = page.value as { contributors?: PageContributor[] };
  return data.contributors ?? [];
});

const initial = (name: string) => (name || "?").trim().charAt(0).toUpperCase();
</script>

<template>
  <div v-if="contributors.length" class="page-contributors">
    <div class="page-contributors-label">本页贡献者</div>
    <ul class="page-contributors-list">
      <li v-for="c in contributors" :key="c.username || c.name" class="page-contributors-item">
        <a
          v-if="c.profileUrl"
          class="page-contributors-link"
          :href="c.profileUrl"
          target="_blank"
          rel="noreferrer"
          :title="`${c.name} · ${c.commits} 次提交`"
        >
          <img v-if="c.avatar" class="page-contributors-avatar" :src="c.avatar" :alt="c.name" />
          <span v-else class="page-contributors-avatar page-contributors-avatar-fallback">{{ initial(c.name) }}</span>
          <span class="page-contributors-name">{{ c.name }}</span>
        </a>
        <span
          v-else
          class="page-contributors-link page-contributors-link-static"
          :title="`${c.name} · ${c.commits} 次提交`"
        >
          <img v-if="c.avatar" class="page-contributors-avatar" :src="c.avatar" :alt="c.name" />
          <span v-else class="page-contributors-avatar page-contributors-avatar-fallback">{{ initial(c.name) }}</span>
          <span class="page-contributors-name">{{ c.name }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<style>
/* 与 edit-link 同一行：编辑链接靠左，贡献者靠右 */
@media (min-width: 640px) {
  .VPDocFooter {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .VPDocFooter > .page-contributors {
    order: 2;
    margin: 0 0 14px auto;
    padding: 0;
    border-top: none;
  }

  .VPDocFooter > .edit-info {
    order: 1;
    flex: 1 1 auto;
    min-width: 0;
  }

  .VPDocFooter > .prev-next {
    order: 3;
    flex: 1 0 100%;
  }
}
</style>

<style scoped>
.page-contributors {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px 12px;
  margin: 12px 0 18px;
}

.page-contributors-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-3);
  line-height: 1;
}

.page-contributors-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.page-contributors-item {
  margin: 0;
  padding: 0;
}

.page-contributors-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.page-contributors-link:hover {
  color: var(--vp-c-brand-1);
}

.page-contributors-link-static {
  cursor: default;
}

.page-contributors-link-static:hover {
  color: var(--vp-c-text-2);
}

.page-contributors-avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
  object-fit: cover;
  background: var(--vp-c-default-soft);
}

.page-contributors-avatar-fallback {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  background: var(--vp-c-default-soft);
}

.page-contributors-name {
  font-size: 13px;
  line-height: 1;
}

@media (max-width: 639px) {
  .page-contributors {
    justify-content: flex-start;
  }
}
</style>
