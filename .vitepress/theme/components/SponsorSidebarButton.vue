<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const visible = ref(false)

function open(e: MouseEvent) {
  // 阻止事件冒泡，避免触发其他行为
  e.stopPropagation()
  visible.value = true
}

function close() {
  visible.value = false
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div class="sponsor-sidebar-btn" @click="open">
    <div class="sponsor-btn-inner">
      <svg class="sponsor-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
      </svg>
      <span class="sponsor-text">赞助</span>
    </div>
  </div>

  <Teleport to="body">
    <!-- 遮罩层 -->
    <Transition name="vp-fade" appear>
      <div v-if="visible" class="vp-sponsor-modal" @click.self="close">
        <!-- 内容层 -->
        <Transition name="vp-pop" appear>
          <div v-if="visible" class="vp-sponsor-modal__content">
            <div class="images-row">
              <img src="/image/alipay.png" alt="alipay" />
              <img src="/image/vx.png" alt="vx" />
            </div>
            <button class="vp-sponsor-modal__close" @click="close" aria-label="close">×</button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.sponsor-sidebar-btn {
  margin: 8px 12px;
  cursor: pointer;
}

.sponsor-btn-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a5a 50%, #d94545 100%);
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(233, 69, 69, 0.3);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.sponsor-btn-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.sponsor-btn-inner:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(233, 69, 69, 0.4);
}

.sponsor-btn-inner:hover::before {
  left: 100%;
}

.sponsor-btn-inner:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(233, 69, 69, 0.3);
}

.sponsor-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.sponsor-text {
  letter-spacing: 2px;
}

.vp-sponsor-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.vp-sponsor-modal__content {
  position: relative;
  max-width: min(90vw, 700px);
  max-height: 90vh;
  background: var(--vp-c-bg);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  padding: 16px;
}

.images-row {
  display: flex;
  gap: 16px;
}

.images-row img {
  display: block;
  width: 50%;
  height: auto;
  border-radius: 8px;
}

.vp-sponsor-modal__close {
  position: absolute;
  top: 8px;
  right: 12px;
  border: none;
  background: transparent;
  color: var(--vp-c-text-1);
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
}

.vp-fade-enter-active,
.vp-fade-leave-active {
  transition: opacity 0.18s ease;
}

.vp-fade-enter-from,
.vp-fade-leave-to {
  opacity: 0;
}

.vp-pop-enter-active,
.vp-pop-leave-active {
  transition: transform 0.24s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.24s ease;
}

.vp-pop-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.vp-pop-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>