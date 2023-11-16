import AddTodo from '@/components/AddTodo'
import TodoList from '@/components/TodoList'
import { getAllTodos } from '../../api'

export default async function Home() {
  const tasks = await getAllTodos()
  console.log(tasks)
  return (
    <main className="max-w-3xl mx-auto ">
      <div className="text-center my-5 flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-white">Todo App</h1>
        <AddTodo />
      </div>
      <TodoList tasks={tasks} />
    </main>
  )
}
