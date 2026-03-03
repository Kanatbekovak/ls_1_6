import { create } from "zustand";

export const useTodo = create((setState) => ({
  todos: [],
  add: (text) => setState((s) => ({ todos: [...s.todos, { id: Date.now(), text, done: false }] })),
  del: (id) => setState((s) => ({ todos: s.todos.filter((t) => t.id !== id) })),
  tog: (id) => setState((s) => ({ todos: s.todos.map((t) => t.id === id ? { ...t, done: !t.done } : t) })),
}));