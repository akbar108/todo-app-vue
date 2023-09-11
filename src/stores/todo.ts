import { defineStore } from 'pinia';

type Todo = {
  todo: string,
  fromDate: string,
  toDate: string,
  status:  boolean
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
  }),

  actions: {
    addTodoFromPinia(newTodo: string, fromDate: string, toDate: string, status: boolean) {
      this.todos.push({todo: newTodo, fromDate: fromDate, toDate: toDate, status: status});
    },
    removeTodo(index: number) {
      this.todos.splice(index, 1);
    },

  },
  persist: true,
});
