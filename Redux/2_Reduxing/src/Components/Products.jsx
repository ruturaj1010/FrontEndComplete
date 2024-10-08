import React, { useContext, useEffect } from 'react'
import { userContext } from '../context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import getAsyncProduct from '../actions/ProductAction'

const Products = () => {

  const { products } = useSelector( state => state.productReducer )
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( getAsyncProduct() )
  }, [] )

  const [val] = useContext( userContext )

  return (
    <div className='w-full mx-auto'>
      <h1 className='text-2xl font-semibold'>Products list - { val + products.length }</h1>
      <div className='w-full'>
        { products && products.map( ( item, index ) => {
          return <div key={item.id} className='flex items-center justify-between py-1 font-semibold'>
            <span>{item.title}</span>
            <span>$ {item.price}</span>
          </div>
        } ) }
      </div>
    </div>
  )
}

export default Products