import React, {useState} from 'react'
import SideMenuContainer from "./SideMenuContainer"
import Logo from "./Logo"
import Navbar from "./Navbar"
import Burger from "./Burger"

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Burger isToggled={isOpen} onClick={() => setIsOpen(prev => !prev)} />

      <SideMenuContainer isOpen={isOpen}>
        <Logo />
        <Navbar onClickLink={() => setIsOpen(false)} />
      </SideMenuContainer>
    </>
  )
}

export default SideMenu
