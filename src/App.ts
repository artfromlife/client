// 选项式

const CodeEditor = () => import('./components/CodeEditor')

import './style/app.css'

import {defineAsyncComponent, ref} from 'vue'

export const App = {
    name: 'App',
    components: {CodeEditor: defineAsyncComponent(CodeEditor)},
    data() {
        return {
            visible: false
        }
    },
    methods: {
        handleClick() {
            this.visible = !this.visible
        }
    },
    template: `
      <div>
      <button @click="handleClick">{{ visible ? "看得见" : "看不见" }}</button>
      <CodeEditor v-if="visible" class="editor-position" value="const noop = () => {}"/>
      </div>`,
}