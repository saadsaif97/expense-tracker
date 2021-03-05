import React, { useContext } from 'react'
import { TransectionContext } from '../context/TransectionContext'
import Transection from './Transection'

const TransectionList = () => {
  const { transections, deleteTransection } = useContext(TransectionContext)

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transections.map((transection) => (
          <Transection
            key={transection.id}
            transection={transection}
            handleDelete={deleteTransection}
          />
        ))}
      </ul>
    </>
  )
}

export default TransectionList
