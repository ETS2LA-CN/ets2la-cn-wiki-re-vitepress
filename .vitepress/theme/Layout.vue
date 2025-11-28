<script setup lang="ts">
// 为文档图片启用点击放大，并在放大时根据侧边栏宽度向右偏移，避免被遮挡
import DefaultTheme from 'vitepress/theme'
import SponsorModalMount from './components/SponsorModalMount.vue'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'

// 保存当前的 medium-zoom 实例，便于路由切换时卸载并重新挂载
let zoom: ReturnType<typeof mediumZoom> | null = null
const apply = () => {
  // 只作用于文档区域中的普通图片，排除站点 Logo 与显式禁用的图片
  const selector = '.vp-doc img:not(.logo):not([data-no-zoom])'
  // 路由切换时先卸载旧实例，避免重复绑定
  if (zoom) zoom.detach()
  // 背景色跟随主题变量，确保暗/亮主题下视觉一致
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--vp-c-bg') || '#fff'
  zoom = mediumZoom(selector, { background: bg })
  zoom.on('open', () => {
    // 打开放大时，读取当前已放大的图片元素
    const el = document.querySelector('.medium-zoom-image--opened') as HTMLElement | null
    if (!el) return
    // 检测左侧导航栏，用其宽度估算需要右移的距离
    const aside = document.querySelector('.VPSidebar') as HTMLElement | null
    // 支持通过 CSS 变量 --zoom-offset-x 自定义固定偏移
    const varOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--zoom-offset-x')) || 0
    let offset = varOffset
    if (!offset && aside) {
      const r = aside.getBoundingClientRect()
      if (r.width > 0) offset = Math.round(r.width / 2)
    }
    if (!offset) return
    // 解析 medium-zoom 设置在元素上的 transform，叠加 X 方向偏移
    const t = el.style.transform || ''
    const m = t.match(/translate3d\(([-\d.]+)px,\s*([-\d.]+)px,\s*0\)\s*scale\(([-\d.]+)\)/)
    if (!m) return
    const x = parseFloat(m[1])
    const y = parseFloat(m[2])
    const s = m[3]
    el.style.transform = `translate3d(${x + offset}px, ${y}px, 0) scale(${s})`
  })
}

const route = useRoute()
onMounted(() => {
  // 初次挂载后异步应用，确保文档图片已渲染
  requestAnimationFrame(apply)
})
watch(() => route.path, () => {
  // 路由变更时重新应用放大绑定
  apply()
})
</script>

<template>
  <DefaultTheme.Layout>
    <!-- 底部插槽：在所有页面统一渲染 SponsorModalMount -->
    <template #layout-bottom>
      <SponsorModalMount />
    </template>
  </DefaultTheme.Layout>
</template>
