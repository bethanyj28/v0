import { device } from '../styles/devices'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { useState } from 'react'

const Drawer = styled.aside`
  height: 100vh;
  width: min(75vw, 300px);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: var(--secondary-bg);
  z-index: 9;
  transform: translateX(${props => props.openMenu ? 0 : 100}vw);
  transition: 1s;
  display: flex;
  justify-content: flex-end;
  align-items: center;

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

const Links = styled.ul`
  list-style: none;
  text-align: right;
`

const Link = styled.a`
  text-decoration: none;
  color: var(--primary-text);
  font-size: 5vh;
  margin: 4em 1em;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary-text);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: top right;
  }

  &:hover:before {
    transform: scaleX(1);
  }
`

const MobileMenu = (props) => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => setOpenMenu(!openMenu)

  return (
    <>
    <Hamburger>
      <FontAwesomeIcon icon={openMenu ? faXmark : faBars} size="lg" onClick={()=> toggleMenu()}/>
    </Hamburger>
    <Drawer openMenu={openMenu}>
      <Links>
        {props.sections.map((section) => <li key={section}><Link href={`#${section}`}>{section}</Link></li>)}
      </Links>
    </Drawer>
    </>
  )
}

export default MobileMenu
