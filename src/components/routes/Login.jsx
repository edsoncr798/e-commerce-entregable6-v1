import React from 'react'
import { useForm } from 'react-hook-form'
import '../css/login.css'

const Login = () => {


  const {register, reset, handleSubmit} =useForm()


  return (
    <div className='login__container'>
      <div className='main__container'>
        <form className='form__login'>
          <strong>Welcome! Enter your email and password to continue</strong>
          <p className='login__message'></p>

          <div className='test__data'>
              <b>Test data</b>
              <div className='default'>
                <i className="fa-sharp fa-solid fa-envelope"></i>holis
              </div>
              <div className='default'>
                <i className="fa-solid fa-lock"></i>12345
              </div>
          </div>

          <div className='input__container'>
              <label htmlFor="email">Email</label>
              <input {...register('email')} type="text" id='email'/>
          </div>
          <div className='input__container'>
              <label htmlFor="password">Password</label>
              <input {...register('password')} type="password" id='password'/>
          </div>
          <div className='message__error'>
            
          </div>
          <button className='submit__btn'>
          Login
          </button>

          <div className='option__form'>
            Don't have an account? {''}
            <button type='button'>
              Sign up
            </button>
          </div> 
        </form>
      </div>
    </div>
  )
}

export default Login