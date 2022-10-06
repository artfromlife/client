import { createApp } from './node_modules/vue/dist/vue.cjs.js'
// 默认给的是不带compiler的包, 自己导入
import { App } from "./src/App";
const app = createApp(App)
app.mount('#app')
