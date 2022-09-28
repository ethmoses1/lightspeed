import React from 'react'
import Product from './product'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../index.css'

export default function Products() {
  const [products, setProducts] = useState('')
  const [total, setTotal] = useState('')

  const getAllProducts = async () => {
    const url = 'https://ls-ios-products.herokuapp.com/'
    const response = await axios.get(url)
    let totalAmount = 0
    for (let i = 0; i < response.data.length; i++) {
      totalAmount += Number(response.data[i].price)
      response.data[i]['qty'] = 1
      response.data[i]['totalPrice'] = 0
    }
    setTotal(totalAmount)
    setProducts(response.data)
  }
    const getTotal = (amount, operation)=>{
        if (operation === "+"){
            setTotal(total+amount)
        }else{
            setTotal(total-amount)
        }

    }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <header>New Order</header>
      <div className="products">
        {products &&
          products.map((product) => {
            return <Product key={product.id} product={product} total={getTotal} />
          })}
        <div className="total">
          <p>Total</p> <p>${Number(total).toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}
