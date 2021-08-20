// 整个包的入口
import Button from './button.vue'
import Dialog from './dialog.vue'
import Input from './input.vue'

// 存储组件列表
const components = [
  Button,
  Dialog,
  Input
]

const install = function (Vue) {
  // 全局注册组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件，如果是， 就不要调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install