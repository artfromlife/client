// 选项式
export const App = {
    name: 'App',
    template: `<button @click="count++">{{count}}</button>`,
    data() {
        return {
            count: 0
        }
    }
}