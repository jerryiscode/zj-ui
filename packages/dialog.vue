<template>
<!-- self 只有点自己才能触发 -->
  <transition name="dialog-fade">
    <div class="zj-dialog__wrapper" v-show="visible" @click.self="handleClose">
    <div class="zj-dialog" :style="{width, matginTop: top}">
      <div class="zj-dialog__header">
        <slot name="title">
          <span class="zj-dialog__title">{{title}}</span>
        </slot>
        <button class="zj-dialog__headerbtn" @click.self="handleClose">×</button>
      </div>
      <div class="zj-dialog__body">
        <!-- 默认插槽 -->
        <slot></slot>
      </div>
      <div class="zj-dialog__footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'ZjDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '80%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: 'false',
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false);
    }
  }
}
</script>

<style lang="scss" scoped>
.zj-dialog__wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .zj-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &__header{
      padding: 20px 20px 10px;
      .zj-dialog__title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .zj-dialog__headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .zj-icon-close{
          color:909399
        }
      }
    }
    &__body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .zj-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>