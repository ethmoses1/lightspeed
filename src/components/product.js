import React, { useEffect, useState } from 'react'
import '../index.css'
import Amount from './amount'
export default function Product(props) {
  let { product } = props
  const [amount, setAmount] = useState(true)

  const updateAmount = () => {
    product.price = product.qty * product.price
  }

  const onAdd = () => {
    product.qty++
    updateAmount()
    if (amount === true) {
      setAmount(false)
    } else {
      setAmount(true)
    }
  }
  const onRemove = () => {
    if (product.qty === 0) return

    product.qty--
    updateAmount()
    if (amount === true) {
      setAmount(false)
    } else {
      setAmount(true)
    }
  }
 
  useEffect(() => {
  }, [amount])

  return (
    <div>
      <div className="product">
        <p className="product_name">{product && product.name}</p>
        <div>
          <Amount quantity={product.qty} add={onAdd} remove={onRemove} />
        </div>
        <p className="product_price">{`${product && '$' + Number(product.price).toFixed(2)}`}</p>
      </div>
    </div>
  )
}
