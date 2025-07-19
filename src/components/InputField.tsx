import React from 'react'
import './styles/InputFieldCss.css'

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {

const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setTodo(event.target.value);
}

  return (
    <form className='input'>
      <input type="input" placeholder='Enter a task' className='input_box' value={todo} onChange={HandleChange} />
      <button className="input_submit" type='submit'>Go</button>
    </form>
  )
}

export default InputField
