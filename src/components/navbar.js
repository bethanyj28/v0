import DarkModeToggle from './DarkModeToggle'
import { device } from '../styles/devices'
import MobileMenu from './MobileMenu'
import NavLinks from './NavLinks'
import styled from 'styled-components'

const Bar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  height: 5vh;
  width: 100vw;
  padding: 2vw;
  flex-direction: row;
  z-index: 10;
  background-color: var(--primary-bg);
  transition: all 0.5s linear;
`

const NavLinkDiv = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`

const Logo = styled.a`
  text-decoration: none;
  color: var(--primary-text);
  font-family: 'Junction', sans-serif;
  font-weight: bold;
`

const Settings = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    z-index: 11;
  }
`

const NavBar = () => {
  return (
    <Bar>
      <Logo href="#">Bj</Logo>
      <NavLinkDiv>
        <NavLinks />
      </NavLinkDiv>
      <Settings>
        <DarkModeToggle />
      </Settings>
      <MobileMenu />
    </Bar>
  )
}

export default NavBar
