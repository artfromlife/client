// 选项式

const CodeEditor = () => import('./components/CodeEditor')
import './style/app.css'
import { defineAsyncComponent } from 'vue'
export const App = {
    name: 'App',
    components: { CodeEditor: defineAsyncComponent(CodeEditor) },
    template: `
      <CodeEditor class="editor-position" value="const noop = () => {}"/>`,
}