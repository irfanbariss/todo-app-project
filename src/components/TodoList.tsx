import { ITask } from '../../types/tasks'
import Task from './Task'

interface TodoListProps {
  tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auo flex justify-between bg-slate-900 rounded-md p-10 w-full align-center">
      <table className="mx-auto w-full whitespace-nowrap">
        <thead>
          <tr className="text-left font-semibold tracking-wide text-gray-500 uppercase border-b dark ">
            <th className="px-4 py-3">Todos</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default TodoList
