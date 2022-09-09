import React from "react";
import DropDown from "./DropDown";
import '../css/home.css'
import axios from "axios";
import '../../App.css'
import '../css/filter.css'
import {useEffect, useState} from 'react'

const Filters = ({handleClose}) => {

  const [categories, setCategories] = useState()

  useEffect(()=>{
    const URL=`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
    axios.get(URL)
    .then(res=>setCategories(res.data.data.categories))
    .catch(err => console.log(err))
  },[])

  // console.log(categorys)

  // const selectCategory=(id)=>{
  //   handleClose()
  //   setCategories(id)
  // }

  console.log(categories)

  return (
    <div className="home-aside__filters">
      <DropDown header='Price'>
        <form className="price__filter">
          <label>
            <span>From</span>
            <input type="number"  />
          </label>
          <label>
            <span>To</span>
            <input type="number" />
          </label>
          <button>
            Filter price
          </button>
        </form>
      </DropDown>
      <DropDown header='Category'>
        <ul className="category__filter">
        {
          categories?.map(category=>(
            <li key={category.id}>
              <button>
                {category.name}
              </button>
            </li>
          ))
        }
        </ul>
      </DropDown>
      {/* <div className="home-side__filter-drop-down">
        <div className="home-aside-filter__header">
          <span>Price</span>
          <i class="fa-solid fa-chevron-down"></i>
        </div>

        <div className="home-aside-filter__content">
          <form className="price__filter">
            <label>
              <span>From</span>
              <input type="number" id="fromPrice " />
            </label>
            <label>
              <span>To</span>
              <input type="number" id="toPrice" />
            </label>
            <button>Filter price</button>
          </form>
        </div>
      </div>
      <div className="home-aside__filter-drop-down">
        <div className="home-aside-filter__header">
          <span>Category</span>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className="home-aside-filter__content">
          <ul className="category__filter">
            <li>
              <button>Smart TV</button>
            </li>
            <li>
              <button>Computers</button>
            </li>
            <li>
              <button>Smartphones</button>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Filters;
