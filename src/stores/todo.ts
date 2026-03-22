import {defineStore} from 'pinia'
import {ref} from "vue";

interface TodoItem {
    id: number
    title: string
    completed: boolean
}

export const useTodoStore = defineStore('todo', () => {
    const todos = ref<TodoItem[]>([])
    const setTodos = (data: TodoItem[]) => {
        todos.value = data
    }
    const addTodos = (data: TodoItem[]) => {
        todos.value = [...todos.value, ...data]
    }
    const toggleTodo = (id: number) => {
        const todo = this.todos.find(item => item.id === id)
        if (todo) todo.completed = !todo.completed
    }
    return {
        todos, setTodos, addTodos, toggleTodo
    }
    // state: () => ({
    //     todos: [] as TodoItem[]
    // }),
    // actions: {
    //     setTodos(todos: TodoItem[]) {
    //         this.todos = todos
    //     },
    //     addTodos(todos: TodoItem[]) {
    //         this.todos = [...this.todos, ...todos]
    //     },
    //     toggleTodo(id: number) {
    //         // 新增：修改状态的交互，体现pinia的作用
    //         const todo = this.todos.find(item => item.id === id)
    //         if (todo) todo.completed = !todo.completed
    //     }
    // },
    // getters: {
    //     completedCount: (state) => {
    //         return state.todos.filter(item => item.completed).length
    //     }
    // }
})