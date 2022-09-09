import React from "react";
import Filters from "./Filters";
import { useState } from "react";
import '../css/cardHome.css'
import '../css/home.css'
import '../../App.css'


const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="home-card__search-box">
      <form className="input">
        <input
          type="text"
          placeholder="What are you looking for?"
          id="textSearch"
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <button 
          className="home-card__icon-filter"
          onClick={()=> setIsOpen(!isOpen)}
          style={{color: isOpen? 'var(--primary)': ''}}
      >
        <i className="fa-solid fa-filter"></i>
        Filters
      </button>

      <div className={`filters__modal ${isOpen ? 'open': ''}`}>
        <button className="close" onClick={() => setIsOpen(false)}>
        <i className="fa-solid fa-rectangle-xmark"></i>
        </button>
        <h5>Filters</h5>
        <Filters handleClose={() => setIsOpen(!isOpen)}/>
      </div>
      {
        isOpen && <div className="overlay" onClick={()=>setIsOpen(false)}></div>
      }
    </div>
  );
};

export default SearchBox;
