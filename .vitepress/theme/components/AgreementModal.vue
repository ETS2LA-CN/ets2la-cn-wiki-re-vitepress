<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()
const show = ref(false)
const agreed = ref(false)

function open() {
  show.value = true
  agreed.value = false
}

function handleAgree() {
  if (agreed.value) {
    show.value = false
  }
}

function handleDisagree() {
  if (!agreed.value) {
    router.go('/')
  }
}

onMounted(() => {
  open()
})
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="agreement-overlay">
      <div class="agreement-modal">
        <div class="modal-header">
          <h2>许可协议</h2>
        </div>

        <div class="modal-content">
          <p>本教程名为：<strong>ETS2LA 中国区安装与使用指南</strong></p>
          <p>
            由 
            <a href="https://goodnightan.com" target="_blank" class="c-link">晚安</a>, 
            <a href="https://github.com/Srlily" target="_blank" class="c-link">Srlily</a>, 
            <a href="https://space.bilibili.com/357816575" target="_blank" class="c-link">MR-UIAW</a>, 
            <a href="https://space.bilibili.com/3493113874090879" target="_blank" class="c-link">BGYdook</a> 
            共同创作。
          </p>
          <p>本作品采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" class="c-link"><strong>知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议 (CC BY-NC-SA 4.0)</strong></a> 进行许可。</p>

          <div class="divider"></div>

          <h3 class="section-h3">分享</h3>
          <p>只要您遵守以下许可协议条款：</p>
          <ul class="modal-ul">
            <li><strong>署名 (BY)</strong> — 您必须给出适当的署名，提供指向本许可协议的链接，并指出是否对原始内容进行了更改。您可以用任何合理的方式来署名，但不得以任何方式表明许可人为您或您的使用背书。</li>
            <li><strong>非商业性使用 (NC)</strong> — 您不得将本作品用于商业目的。</li>
            <li><strong>相同方式共享 (SA)</strong> — 如果您修改、转换或基于本作品进行创作，您必须基于与原先许可协议相同的许可协议分发您的贡献。</li>
          </ul>

          <p>您可以自由地：</p>
          <ul class="modal-ul">
            <li><strong>分享</strong> — 在任何媒介或格式下复制和分发本作品。</li>
            <li><strong>演绎</strong> — 修改、转换或基于本作品进行二次创作。</li>
          </ul>

          <p class="example-title">示例：</p>
          
          <div class="example-box box-allowed">
            <div class="box-header">允许的</div>
            <p class="box-p">您可以将将网页教程完整复制到一份腾讯文档中。他在文档开头写上：“本文内容来源于 ETS2LA 中国区安装与使用指南 by ETS2LA中国区管理团队,采用CC BY-NC-SA 4.0许可。任何人可在相同条款下自由分享和修改本文档。”</p>
          </div>

          <div class="example-box box-forbidden">
            <div class="box-header">不允许的</div>
            <p class="box-p">您直接将网页教程完整复制到一份腾讯文档或其他软件中并在文档中打上你自己的水印或者要求别人需要花钱购买才能获得教程</p>
            <div class="violation-text">违反：你们侵犯了我们原创者的版权！（您未履行协议中的 署名 要求，如果您进行了商业活动，那么您违背了协议中的 非商业性使用 要求）</div>
          </div>

          <div class="divider"></div>

          <h3 class="section-h3">权利声明与法律责任</h3>
          <p>请注意，上述“知识共享许可协议”是我们在法律允许范围内，预先授权您使用本作品的方式。</p>
          <p>任何超出本许可协议授权范围的使用行为，例如：在转载或使用中未进行适当署名、将本作品用于商业目的、或在修改本作品后采用更严格的许可协议发布，均构成对我们著作权的直接侵犯。</p>
          <p>对此，我们保留采取一切法律手段追究侵权方法律责任的权利，包括但不限于要求停止侵权、消除影响、公开道歉以及赔偿损失等。</p>
        </div>

        <div class="modal-footer">
          <div class="footer-tips">
            <p>如您接受，请勾选“我已阅读上述许可协议”并选择“同意并继续”按钮</p>
            <p>如您不接受，请选择“不同意”按钮并返回主页</p>
          </div>

          <div class="checkbox-pill" @click="agreed = !agreed">
            <div class="custom-check" :class="{ 'is-checked': agreed }"></div>
            <span class="checkbox-label">我已阅读上述许可协议</span>
          </div>

          <div class="button-group">
            <button 
              class="btn-pill btn-disagree" 
              :disabled="agreed" 
              @click="handleDisagree"
            >
              不同意
            </button>
            <button 
              class="btn-pill btn-agree" 
              :disabled="!agreed" 
              @click="handleAgree"
            >
              同意并继续
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.agreement-overlay {
  position: fixed; inset: 0; background: rgba(0, 0, 0, 0.85);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999; backdrop-filter: blur(10px);
}

.agreement-modal {
  background: #1a1a1a; color: #d1d1d1;
  width: 90%; max-width: 840px; max-height: 85vh;
  border-radius: 16px; display: flex; flex-direction: column;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1); overflow: hidden;
}

.modal-header { padding: 24px 32px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.modal-header h2 { margin: 0; font-size: 1.4rem; color: #fff; }

.modal-content { flex: 1; padding: 24px 32px; overflow-y: auto; font-size: 14px; line-height: 1.7; }
.modal-ul { padding-left: 20px; margin: 12px 0; }
.modal-ul li { margin-bottom: 8px; }
.section-h3 { color: #fff; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; }
.divider { margin: 24px 0; border-top: 1px solid rgba(255, 255, 255, 0.1); }

.example-title { margin-top: 20px; font-weight: bold; color: #fff; }
.example-box { padding: 16px; border-radius: 8px; margin-top: 12px; border: 1px solid rgba(255, 255, 255, 0.05); }
.box-allowed { background: rgba(16, 185, 129, 0.08); border-left: 4px solid #10b981; }
.box-forbidden { background: rgba(239, 68, 68, 0.08); border-left: 4px solid #ef4444; }
.box-header { font-weight: bold; margin-bottom: 6px; }
.box-allowed .box-header { color: #10b981; }
.box-forbidden .box-header { color: #ef4444; }
.box-p { margin: 0 !important; font-size: 13.5px; }
.violation-text { margin-top: 10px; font-weight: 600; font-size: 13px; color: #f87171; }

.modal-footer { padding: 24px 32px 32px; background: #141414; border-top: 1px solid rgba(255, 255, 255, 0.1); }
.footer-tips { font-size: 13px; color: #888; margin-bottom: 20px; }
.footer-tips p { margin: 4px 0; }

.checkbox-pill {
  background: rgba(255, 255, 255, 0.04); padding: 14px 20px;
  border-radius: 12px; display: flex; align-items: center; gap: 12px;
  cursor: pointer; margin-bottom: 24px; transition: 0.2s;
}
.checkbox-pill:hover { background: rgba(255, 255, 255, 0.07); }

.custom-check {
  width: 18px; height: 18px; border-radius: 50%; border: 2px solid #555;
  position: relative; transition: 0.2s;
}
.custom-check.is-checked { background: #3b82f6; border-color: #3b82f6; }
.custom-check.is-checked::after {
  content: ""; position: absolute; left: 5px; top: 2px;
  width: 4px; height: 8px; border: solid white;
  border-width: 0 2px 2px 0; transform: rotate(45deg);
}

.button-group { display: flex; justify-content: flex-end; gap: 16px; }
.btn-pill { padding: 10px 32px; border-radius: 999px; font-weight: 600; font-size: 14px; cursor: pointer; border: none; transition: 0.2s; }

.btn-agree { background: #3b82f6; color: #fff; }
.btn-disagree { background: rgba(255, 255, 255, 0.08); color: #ccc; }

.btn-pill:disabled {
  background: #2a2a2a !important;
  color: #555 !important;
  cursor: not-allowed;
  opacity: 0.6;
}

.c-link { color: #3b82f6; text-decoration: none; font-weight: inherit; }
.c-link:hover { text-decoration: underline; }
</style>