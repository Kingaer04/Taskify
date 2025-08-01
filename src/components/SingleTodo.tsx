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
    const handleDone = (id:number) => {
        setTodos(todos.map((todo) =>todo.id ===id?{...todo, isDone:!todo.isDone}:todo))
    }
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
    <form className='todos__single'>
        {
            todo.isDone ? (
                <s className='todos__single--text'>
                    {todo.todo}
                </s>
            ) : (
                <span className='todos__single--text'>
                    {todo.todo}
                </span>
            )
        }
        <div>
            <span className="icon">
                <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
                <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <FaCheck />
            </span>
        </div>
    </form>
    )
}

export default SingleTodo
