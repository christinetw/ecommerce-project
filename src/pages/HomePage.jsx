import React from 'react';
import { NavBar } from '../compoments/NavBar';
import { Announcement } from '../compoments/Announcement';
import Slider from '../compoments/Slider.jsx';
import Categories from '../compoments/Categories';
import { Products } from '../compoments/Products';
import Newsletter from '../compoments/NewsLetter';
import Footer from '../compoments/Footer';
export default function HomePage() {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
