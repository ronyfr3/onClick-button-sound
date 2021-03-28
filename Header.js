import React, { useState } from "react";
import Eye from '../Eye/Eye'
import {GiSelfLove} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa'
import {HiSun} from 'react-icons/hi'
import {BsMoon} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import "./Header.css";

const Header = () => {
  const [sun,setSun]=useState(false)
  const handleClick=()=>{
    setSun(!sun)
    const beep= new Audio()
    beep.src='./buttonClick.mp3'
    beep.play()
  }
  const handleSound=()=>{
    const beep= new Audio()
    beep.src='./beep.wav'
    beep.play()
  }
  const handleSound2=()=>{
    const beep= new Audio()
    beep.src='./btnclick.mp3'
    beep.play()
  }
  return (
    <div>
      <Eye/>
      <div class="custom-shape-divider-top-1615300385">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
     <nav>
       <Link to='/'  onClick={handleSound}>Memories</Link>
       <ul>
         <li onClick={handleClick}>{sun?<HiSun/>:<BsMoon/>}</li>
         <li  onClick={handleSound2}><GiSelfLove className='love'/></li>
         <li onClick={handleSound2}><FaUserCircle className='user'/></li>
       </ul>
     </nav>
    </div>
  );
};

export default Header;
