import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
// 引入主题样式（包含图片放大遮罩层级与可选偏移变量）
import './style.css'
// 扩展默认主题，替换布局以插入赞助模态挂载点

export default {
  extends: DefaultTheme,
  Layout
}
