// options API
import { editor } from 'monaco-editor/esm/vs/editor/editor.api'
export const CodeEditor = {
    template: `<div ref="editor" style="width: 80%; height: 600px"></div>`,
    props: [ 'value' ],
    data() {
        return {
        }
    },
    mounted() {
        const monacoInstance = editor.create(this.$refs.editor, {
            theme: 'vs-dark',
            value: '',
            language: 'javascript'
        })
    }
}