// import React, { useState } from "react"; 
import About from "../components/about/About";
import HeroDiscount from "../components/hero/HeroDiscount";
import HeroForm from "../components/hero/HeroForms";
import HeroLinks from "../components/hero/HeroLinks";
import Products from '../components/products/Products';

const HomePage = () => {
  // const [category, setCategory] = useState("Category1");-

  return (
    <div>
      <div style={{ maxWidth: '1250px', width: '100%', margin: '0 auto' }}>
        <HeroLinks />
        <HeroDiscount />
        <HeroForm />
        <Products /> 
        <About />
      </div>
    </div>
  );
};

export default HomePage;