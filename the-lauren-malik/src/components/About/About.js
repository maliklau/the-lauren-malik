import * as React from 'react';
import meImage from './laurenDuluth.jpg'
import style from './style.css'

export default function About() {
  return (
    <div sx={{ textAlign: 'center' }}>
      <h2 >About Me</h2>
      <div className="flex-container">
        <div className="flex-item-left">
          <img className="laurenImg" src={meImage} alt="imageOfLauren"/>
        </div>
        <div className="flex-item-right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper morbi tincidunt ornare massa. Amet justo donec enim diam vulputate ut pharetra sit amet. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Libero enim sed faucibus turpis in. Porta lorem mollis aliquam ut porttitor leo a diam. Enim neque volutpat ac tincidunt. Aliquet lectus proin nibh nisl condimentum id venenatis a. Vivamus arcu felis bibendum ut. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.
          </p>
          <p>
            Blandit cursus risus at ultrices mi tempus imperdiet. Vehicula ipsum a arcu cursus. Nunc pulvinar sapien et ligula ullamcorper. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Nunc mattis enim ut tellus elementum sagittis. Quisque id diam vel quam elementum pulvinar. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Semper risus in hendrerit gravida rutrum quisque non tellus. Potenti nullam ac tortor vitae purus faucibus ornare. Volutpat ac tincidunt vitae semper quis. Nibh tellus molestie nunc non blandit massa enim. Nisi vitae suscipit tellus mauris a diam. Cras semper auctor neque vitae tempus quam.
          </p>
        </div>
      </div>
    </div>
  )
}
