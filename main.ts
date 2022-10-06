import { createApp } from './node_modules/vue/dist/vue.cjs.js'
// 默认给的是不带compiler的包, 自己导入

const app = createApp({
    template: `<div>
    <textarea type="textarea" v-model="input" rows="30" style="width: 300px"/>
    <button @click="count++">{{ count }}</button>
    </div>`,
    data() {
        return {
            count: 0,
            input: ''
        }
    },
    created() {
        console.log(this)
    }
})

app.mount('#app')
