import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer__description'>
            © Academlo 2022
        </div>
        <div className='footer__social-networks'>
            <a href="https://www.instagram.com/edson_ell98/">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
                <i className="fa-sharp fa-solid fa-envelope"></i>
            </a>
        </div>
    </footer>
  )
}

export default Footer