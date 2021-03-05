import React, { createContext, useReducer } from 'react'
import transectionReducer from './transection-reducer'

let transections = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 },
]

export const TransectionContext = createContext(transections)

// creating the context provider component
export const TransectionContextProvider = (props) => {
  const [state, dispatch] = useReducer(transectionReducer, transections)

  // add transection
  function addTransection(transection) {
    dispatch({
      type: 'ADD_TRANSECTION',
      payload: transection,
    })
  }
  // delete transection
  function deleteTransection(id) {
    dispatch({
      type: 'DELETE_TRANSECTION',
      payload: id,
    })
  }

  return (
    <TransectionContext.Provider
      value={{
        transections: state,
        addTransection,
        deleteTransection,
      }}
    >
      {props.children}
    </TransectionContext.Provider>
  )
}
