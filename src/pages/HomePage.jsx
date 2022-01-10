import React from 'react';
import { NavBar } from '../compoments/NavBar';
import { Announcement } from '../compoments/Announcement';
import { Slider } from '../compoments/Slider';
export default function HomePage() {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
    </div>
  )
}
