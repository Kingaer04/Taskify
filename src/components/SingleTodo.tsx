import React from 'react'
import type { Todo } from './Model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import './styles/SingleTodo.css'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }:Props) => {
  return (
    <form className='todos__single'>
        <span className='todos__single--text'>
            {todo.todo}
        </span>
        <div>
            <span className="icon">
                <AiFillEdit />
            </span>
            <span className="icon">
                <AiFillDelete />
            </span>
            <span className="icon">
                <FaCheck />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo
