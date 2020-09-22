import React, {useState} from 'react'
import SideMenuContainer from "./SideMenuContainer"
import Logo from "./Logo"
import Navbar from "./Navbar"
import HamburgerContainer from "./HamburgerContainer"
import { Sling as Hamburger } from 'hamburger-react'

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <HamburgerContainer>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={24}
        />
      </HamburgerContainer>

      <SideMenuContainer isOpen={isOpen}>
        <Logo />
        <Navbar />
      </SideMenuContainer>
    </>
  )
}

export default SideMenu
