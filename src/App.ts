// 选项式
import { CodeEditor } from "./components/CodeEditor";
import './style/app.css'
export const App = {
    name: 'App',
    components: { CodeEditor },
    template: `<CodeEditor  class="editor-position" value="const noop = () => {}"/>`,
}