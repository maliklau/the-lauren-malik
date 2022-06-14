import * as React from 'react';
import Menu from '../Menu/Menu.js'

export default function TopNav() {
  const hamburger = false
  return (
    <div>
      {hamburger &&
        <Menu/>
      }
      <div style={{ textAlign: 'right' }}>
        <a href="#about" style={{ color: '#008080', textDecoration: 'none', fontFamily: 'Cochin' }}>About Me | </a>
        <a href="#experience" style={{ color: '#008080', textDecoration: 'none', fontFamily: 'Cochin' }}>Experience | </a>
        <a href="#contact" style={{ color: '#008080', textDecoration: 'none', fontFamily: 'Cochin' }}>Contact Info </a>
      </div>
    </div>
  )
}
