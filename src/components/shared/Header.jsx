import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './../css/header.css'
import '../../App.css'

const Header = () => {

  const navigate = useNavigate()

  const handleClickUser=()=>{
     return navigate('login')
  }

  const handleClickPurchase=()=>{
    return navigate('/purchases')
  }
  
  return (
    <header className='header__container'>
      <div className='header__fixed'>
        <nav>
          <NavLink to='/'>
            <div className='header__title'><strong>E-commerce</strong></div>
          </NavLink>
            <button onClick={handleClickUser} className='header__icon'>
              <i className="fa-solid fa-user"></i>
            </button>
            <button onClick={handleClickPurchase} className='header__icon'>
              <i className="fa-solid fa-box-archive"></i>
            </button>
            <button className='header__icon'>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
        </nav>
      </div>
    </header>
  )
}

export default Header