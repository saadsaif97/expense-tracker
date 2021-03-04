import React, { createContext, useState } from 'react'

let transections = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 },
]

export const TransectionContext = createContext(transections)

// creating the context provider component
export const TransectionContextProvider = (props) => {
  const transectionState = useState(transections)

  return (
    <TransectionContext.Provider value={transectionState}>
      {props.children}
    </TransectionContext.Provider>
  )
}
