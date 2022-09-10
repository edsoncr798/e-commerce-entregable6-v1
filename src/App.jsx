import { Routes, Route } from 'react-router-dom'
import Home  from './components/routes/Home'
import ProductDetail from "./components/routes/ProductDetail"
import Login from "./components/routes/Login"
import Purchases from "./components/routes/Purchases"
import Header from "./components/shared/Header"
import { HashRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'


function App() {
  return (
    <HashRouter>
        <Header />
        <div className='home__container'> 
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/purchases' element={<Purchases/>} />
            <Route path='/product/:id' element={<ProductDetail/>} />
          </Routes>
        </div>
        <Footer/>
    </HashRouter>
  )
}

export default App
