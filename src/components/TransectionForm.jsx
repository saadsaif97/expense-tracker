import React, { useContext, useState } from 'react'
import { TransectionContext } from '../context/TransectionContext'

const TransectionForm = () => {
  const { addTransection } = useContext(TransectionContext)

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const transection = {
      id: Math.random() * 1000000,
      text,
      amount: parseFloat(amount),
    }

    addTransection(transection)

    setText('')
    setAmount(0)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}

export default TransectionForm
