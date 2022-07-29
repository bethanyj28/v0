import DarkModeToggle from './DarkModeToggle'
import { device } from '../styles/devices'
import MobileMenu from './MobileMenu'
import NavLinks from './NavLinks'
import styled from 'styled-components'

const Bar = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 5vh;
  width: 95vw;
  margin: 2vw;
  flex-direction: row;
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
`

const Settings = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`

const NavBar = () => {
  return (
    <Bar>
      <Logo href="#">BJ</Logo>
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
