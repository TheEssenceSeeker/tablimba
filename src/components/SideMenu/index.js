import React, {useState, useRef} from 'react'
import SideMenuContainer from "./SideMenuContainer"
import Logo from "./Logo"
import Navbar from "./Navbar"
import Burger from "./Burger"
import useOnClickOutside from "../../hooks/useOnClickOutside"

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useOnClickOutside(
    menuRef,
    () => setIsOpen(false)
  )

  return (
    <div ref={menuRef}>
      <Burger isToggled={isOpen} onClick={() => setIsOpen(prev => !prev)} />

      <SideMenuContainer
        isOpen={isOpen}
      >
        <Logo />
        <Navbar onClickLink={() => setIsOpen(false)} />
      </SideMenuContainer>
    </div>
  )
}

export default SideMenu
