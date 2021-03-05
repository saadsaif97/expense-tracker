import React, { useContext } from 'react'
import { TransectionContext } from '../context/TransectionContext'

const Balance = () => {
  const { transections } = useContext(TransectionContext)

  const amounts = transections.map((transection) => transection.amount)

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((total, amount) => (total += amount), 0)
    .toFixed(2)

  const expence =
    amounts
      .filter((amount) => amount < 0)
      .reduce((total, amount) => (total += amount), 0)
      .toFixed(2) * -1

  const balance = income - expence
  const balanceSign = income - expence >= 0 ? '+' : '-'

  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {balanceSign}${Math.abs(balance)}
      </h1>

      <div className='inc-exp-container'>
        <div>
          <h4>Income</h4>
          <p className='money plus'>+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className='money minus'>-${Math.abs(expence)}</p>
        </div>
      </div>
    </>
  )
}

export default Balance
