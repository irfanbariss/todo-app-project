'use client'

import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'
import { FormEventHandler, useState } from 'react'
import { addTodo } from '../../api'
import { useRouter } from 'next/navigation'

const AddTodo = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [newTodo, setNewTodo] = useState<string>('')

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  const handleSubmitTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    // console.log(newTodo)
    await addTodo({
      id: crypto.randomUUID(),
      text: newTodo,
    })
    setNewTodo('')
    setIsOpen(false)
    router.refresh()
  }

  return (
    <div>
      <button
        className="btn w-full bg-blue-900 p-2 flex align-center justify-center text-white"
        onClick={handleClick}
      >
        Add new todo
        <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={isOpen} setModalOpen={setIsOpen}>
        <form onSubmit={handleSubmitTodo}>
          <h3 className="font-bold text-lg">Add new todo</h3>
          <div className="modal-action">
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              type="text"
              placeholder="eg. Study Next.js..."
              className="input input-bordered w-full"
            />
            <button className="btn" type="submit">
              Add
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
export default AddTodo
