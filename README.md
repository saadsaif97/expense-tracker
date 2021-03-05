## [live app](http://saad-saif-expense-tracker-bootcamp2020.surge.sh/)

---

we can do this task with useState and useReducer both.
with useReducer, all the actions are on same place and code is easy to manage.

### Using react hooks to create simple expense tracker app

creating the transection context on top level as

```
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

```

creating transection reducer as

```
export default function transectionReducer(transections, action) {
  switch (action.type) {
    case 'ADD_TRANSECTION':
      return [action.payload, ...transections]
    case 'DELETE_TRANSECTION':
      return [
        ...transections.filter(
          (transection) => transection.id !== action.payload
        ),
      ]

    default:
      return [...transections]
  }
}

```

using context in children as

```
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

```
