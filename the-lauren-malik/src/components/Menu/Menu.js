import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
      </style>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: '#008080' }}/>
      </Button>
      <Menu
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: '#008080',
          },
        }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem sx={{ color: '#ffffff', fontFamily: 'PT Serif' }} onClick={handleClose}>About Me</MenuItem>
        <MenuItem style={{ color: '#ffffff', fontFamily: 'PT Serif' }} onClick={handleClose}>Experience</MenuItem>
        <MenuItem style={{ color: '#ffffff', fontFamily: 'PT Serif' }} onClick={handleClose}>Contact</MenuItem>
      </Menu>
    </div>
  );
}
