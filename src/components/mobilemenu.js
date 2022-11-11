import DarkModeToggle from './darkmodetoggle'
import { device } from '../styles/devices'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavLinks from './navlinks'
import styled from 'styled-components'
import { useState } from 'react'

const Drawer = styled.aside`
  height: 100vh;
  width: min(75vw, 300px);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: var(--primary-bg);
  z-index: 9;
  transform: translateX(${(props) => (props.openMenu ? 0 : 100)}vw);
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  @media ${device.tablet} {
    display: none;
  }
`

const Hamburger = styled.div`
  visibility: visible;
  z-index: 10;

  @media ${device.tablet} {
    visibility: hidden;
    position: fixed;
    left: -100%;
  }
`

const Settings = styled.div`
  margin: 0.5em 1em;
`

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => setOpenMenu(!openMenu)

  return (
    <>
      <Hamburger>
        <FontAwesomeIcon
          icon={openMenu ? faXmark : faBars}
          size="lg"
          onClick={() => toggleMenu()}
        />
      </Hamburger>
      <Drawer openMenu={openMenu}>
        <NavLinks />
        <Settings>
          <DarkModeToggle />
        </Settings>
      </Drawer>
    </>
  )
}

export default MobileMenu
