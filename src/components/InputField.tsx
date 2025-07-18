import React from 'react'

const InputField: React.FC = () => {
  return (
    <form className='input'>
      <input type="input" placeholder='Enter a task' className='input_box' />
    </form>
  )
}

export default InputField
