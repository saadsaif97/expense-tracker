## [live app](http://saad-saif-expense-tracker-bootcamp2020.surge.sh/)

---

### Using react hooks to create simple expense tracker app

creating the transection context on top level as

```
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

```

providing the context on top level as

```
import { TransectionContextProvider } from './context/TransectionContext'
import Header from './components/Header'
import Balance from './components/Balance'
import TransectionList from './components/TransectionList'
import TransectionForm from './components/TransectionForm'
import './App.css'

function App() {
  return (
    <TransectionContextProvider>
      <div className='container'>
        <Header />
        <Balance />
        <TransectionList />
        <TransectionForm />
      </div>
    </TransectionContextProvider>
  )
}
```

using context in children as

```
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

```
