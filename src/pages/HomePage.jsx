import React from 'react';
import { NavBar } from '../compoments/NavBar';
import { Announcement } from '../compoments/Announcement';
import Slider from '../compoments/Slider.jsx';
import Categories from '../compoments/Categories';
export default function HomePage() {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
      <Categories/>
    </div>
  )
}
