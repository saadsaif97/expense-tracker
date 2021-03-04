import React, { useContext } from 'react'
import { TransectionContext } from '../context/TransectionContext'
import Transection from './Transection'

const TransectionList = () => {
  const [transections, setTransections] = useContext(TransectionContext)

  const handleDelete = (id) => {
    const newTransections = transections.filter(
      (transection) => transection.id !== id
    )
    setTransections(newTransections)
  }

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transections.map((transection) => (
          <Transection
            key={transection.id}
            transection={transection}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  )
}

export default TransectionList
