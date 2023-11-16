import { ITask } from './types/tasks'

const baseURL = 'http://localhost:3001/tasks'

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseURL}`, { cache: 'no-store' })
  const todos = await res.json()
  return todos
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
  const newTodo = await res.json()
  return newTodo
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURL}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
  const editedTodo = await res.json()
  return editedTodo
}
export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  })
}
