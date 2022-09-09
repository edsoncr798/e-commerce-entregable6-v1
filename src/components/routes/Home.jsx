import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products.slice";
import { useEffect } from "react";
import CardHome from "../home/CardHome";
import "../css/home.css";
import '../css/cardHome.css'
import '../css/filter.css'
import '../../App.css'
import Filters from "../shared/Filters";
import SearchBox from "../shared/SearchBox";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((state) => state.products);

  console.log(products)

  return (
      <div className="home__content">
        <aside>
          <div className="home-aside__fixed">
            <Filters handleClose={() =>{}}/>
          </div>
        </aside>
        <section className="home__card-container">
          <SearchBox />
          <ul className="products__list">
            {
              products?.map((product) => (
                <li key={product.id}>
                  <CardHome product={product} />
                </li>
              ))
             }
          </ul>
        </section>
      </div>
  );
};

export default Home;
