'use client'

import { useState, FormEventHandler } from 'react'
import { ITask } from '../../types/tasks'
import { FiEdit } from 'react-icons/fi'
import { TiDelete } from 'react-icons/ti'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { deleteTodo, editTodo } from '../../api'

interface TaskProps {
  task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter()
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState(task.text)

  const handleSubmitEdit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await editTodo({
      id: task.id,
      text: todoToEdit,
    })
    setTodoToEdit('')
    setModalEdit(false)
    router.refresh()
  }

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id)
    setModalDelete(false)
    router.refresh()
  }

  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td className="flex align-center justify-right p-2 mt-5">
        <FiEdit
          onClick={() => setModalEdit(true)}
          size={20}
          className="ml-5 text-green-200"
          cursor="pointer"
        />
        <Modal modalOpen={modalEdit} setModalOpen={setModalEdit}>
          <form onSubmit={handleSubmitEdit}>
            <h3 className="font-bold text-lg">Edit todo</h3>
            <div className="modal-action">
              <input
                value={todoToEdit}
                onChange={(e) => setTodoToEdit(e.target.value)}
                type="text"
                placeholder="eg. Study Next.js..."
                className="input input-bordered w-full"
              />
              <button className="btn" type="submit">
                Confirm
              </button>
            </div>
          </form>
        </Modal>
        <TiDelete
          onClick={() => setModalDelete(true)}
          size={20}
          className="ml-5 text-red-400"
          cursor="pointer"
        />
        <Modal modalOpen={modalDelete} setModalOpen={setModalDelete}>
          <h3 className="text-lg">Delete todo ?</h3>
          <div className="modal-action">
            <button className="btn" onClick={() => handleDeleteTodo(task.id)}>
              Delete
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  )
}
export default Task
