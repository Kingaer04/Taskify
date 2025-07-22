import React from 'react'
import type { Todo } from './Model'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }:Props) => {
  return (
    <form>
      
    </form>
  )
}

export default SingleTodo
