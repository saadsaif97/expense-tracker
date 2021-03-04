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

export default App
