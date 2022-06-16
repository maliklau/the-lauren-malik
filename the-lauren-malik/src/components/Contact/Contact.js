import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import style from './style.css'
import pdf from './resume.pdf'

export default function Contact () {
  return (
    <div sx={{ textAlign: 'center' }}>
      <h2 >Contact Me!</h2>
      <div className="icons">
        <a href='https://www.linkedin.com/in/maliklauren/' alt="LinkedIn">
          <LinkedInIcon sx={{ color: '#008080', width: '10%', height: "20%" }}/>
        </a>
        <a href='https://github.com/maliklau' alt="Github">
          <GitHubIcon sx={{ color: '#008080', width: '10%', height: "80%" }}/>
        </a>
        <a href={pdf} target="_blank" alt="Resume" rel="noreferrer">
          <FileOpenIcon sx={{ color: '#008080', width: '10%', height: "80%" }}/>
        </a>
      </div>
    </div>
  )
}
