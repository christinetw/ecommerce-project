import React from 'react';
import { NavBar } from '../compoments/NavBar';
import { Announcement } from '../compoments/Announcement';
import Slider from '../compoments/Slider.jsx';
export default function HomePage() {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
    </div>
  )
}
