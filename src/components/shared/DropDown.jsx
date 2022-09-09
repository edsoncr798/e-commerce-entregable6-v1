import React from 'react'
import { useState } from 'react'
import '../css/cardHome.css'
import '../../App.css'
import '../css/filter.css'

const DropDown = ({header, children}) => {

const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`home-aside__filter-drop-down ${isOpen ? '': 'closed'}`}>
      <div className='home-aside-filter__header' onClick={()=>setIsOpen(!isOpen)}>
        <span>
          {header}
        </span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className='home-aside-filter__content'>
        {children}
      </div>
    </div>
  )
}

export default DropDown