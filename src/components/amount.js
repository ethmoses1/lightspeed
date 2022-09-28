import React from 'react'

export default function Amount(props) {
    const {quantity, add, remove} = props;
  return (
    <div className='button-cls'>
      <button onClick={remove} className="btn-1">-</button>
      <p>{quantity}</p>
      <button onClick={add} className="btn-2">+</button>
    </div>
  )
}
