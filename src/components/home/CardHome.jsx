import React from 'react'
import { Link } from 'react-router-dom'
import '../css/cardHome.css'
import '../../App.css'

export const CardHome = ({product}) => {


  return (
    <div className='product-card'>
      <Link to={`/product/${product.id}`}>
        <div className='image'>
          <img src={product.productImgs?.[1]} alt="" className='over'/>
          <img src={product.productImgs?.[0]} alt=""/>
        </div>  
        <div className='info'>
          <span className='brand'>{product.brand}</span>
          <strong>{product.title}</strong>
          <span className='price'>Price</span>
          <span className='amount'>$ {product.price}</span>
        </div>
      </Link>
      <button className='card-btn' >
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  )
}

export default CardHome