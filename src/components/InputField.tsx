import React, { useRef } from 'react'
import './styles/InputFieldCss.css'

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (event: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setTodo(event.target.value);
}
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={
      (event) => {
        handleAdd(event);
        inputRef.current?.blur();
      }
    }>
      <input
        ref={inputRef} 
        type="input" 
        placeholder='Enter a task' className='input_box' 
        value={todo} 
        onChange={HandleChange} />
      <button className="input_submit" type='submit'>Go</button>
    </form>
  )
}

export default InputField
