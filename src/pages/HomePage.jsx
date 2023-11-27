import React from "react";
import Header from "../components/header/Header";
import Fake from '../components/Fake/Fake';
import Jummy from '../components/jummy/Jummy';
import Slider from '../components/slider/Slide';
const HomePage = ({ addProducts}) => {
  return (
    <div>
      <Header />
      <h2 className = 'fake-title'>Fake Products</h2>
      <Fake addProducts = {addProducts}/>
      <h2 className = 'fake-title'>Jummy Products</h2>
      <Jummy addProducts = {addProducts}/>
    </div>
  );
};

export default HomePage;
