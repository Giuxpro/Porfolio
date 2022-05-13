import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BsBookmarkStar} from "react-icons/bs"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDots} from "react-icons/bi"

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BsBookmarkStar/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageSquareDots/></a>
    </nav>
  )
}

export default Nav