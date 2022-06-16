import * as React from 'react';
import Menu from '../Menu/Menu.js'
import style from './style.css'
import logoImage from './logo.png'

export default function TopNav() {
  const hamburger = false
  return (
    <div className="flex-container">
      {hamburger &&
        <Menu/>
      }
      <div className="flex-item-left">
        <a href="/">
          <img src={logoImage} alt="homePageLink"/>
        </a>
      </div>
      <div className="flex-item-right">
        <a href="/about">About Me | </a>
        <a href="/experience">Experience | </a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  )
}
