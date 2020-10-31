import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123456"
          title="fruit basket"
          price={11.5}
          rating={5}
          image="https://3.imimg.com/data3/PR/BJ/MY-5868876/fruit-basket-500x500.jpg"
        />
        <Product
          id="456564564"
          title="fruit basket"
          price={55.5}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSZT6VaPsXR5jKqF2XlsSSNdGgP0CL4CExOg&usqp=CAU"
        />
      </div>

      <div className="home__row">
        <Product
          id="897897"
          title="fruit basket"
          price={15}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0115/8673/2132/products/o_1_grande.jpg?v=1575478166"
        />
        <Product
          id="4564645"
          title="fruit basket"
          price={100}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/513Rb752tTL._SY445_.jpg"
        />
        <Product
          id="5378454"
          title="fruit basket"
          price={1.5}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71jOvjATfPL._AC_SX342_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="456786475"
          title="google mini"
          price={50}
          rating={5}
          image="https://icdn6.themanual.com/image/themanual/a-world-lit-only-by-fire-by-william-manchester-book-500x500.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
