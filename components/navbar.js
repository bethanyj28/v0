import DarkModeToggle from './DarkModeToggle'
import { device } from '../styles/devices'
import MobileMenu from './MobileMenu'
import styled from 'styled-components'

const sections = ["about", "blog", "contact"]

const Bar = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 5vh;
  width: 95vw;
  margin: 2vw;
  flex-direction: row;
`

const Logo = styled.a`
  text-decoration: none;
  color: var(--primary-text);
`

const Link = styled.a`
  text-decoration: none;
  color: var(--primary-text);
  margin: 0 2em;
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
    transform-origin: top left;
  }

  &:hover:before {
    transform: scaleX(1);
  }
`

const Links = styled.ul`
  display: none;

  @media ${device.tablet} {
    display: flex;
    margin: 0 2em;
    list-style: none;
  }
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
      <Links>
        {sections.map((section) => <li key={section}><Link href={`#${section}`}>{section}</Link></li>)}
      </Links>
      <Settings>
        <DarkModeToggle />
      </Settings>
      <MobileMenu sections={sections}></MobileMenu>
    </Bar>
  )
}

export default NavBar
