import React from 'react'
import './index.css'
import pic from './images/2.jpg'

export default function Main(props) {
  return (
    <div className='cont'>
      <img src={pic} alt="pic" className='top-img' />
      <p>ANIME</p>
      <div>
        <span>Anime</span>
        <span>Manga</span>
      </div>
      <p>Watch anime and manga for free here!</p>
    </div>
  )


}

