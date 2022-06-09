import styled from 'styled-components'
import DarkModeToggle from './DarkModeToggle'
import { device } from '../styles/devices'

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
`

const Links = styled.ul`
  visibility: hidden;

  @media ${device.tablet} {
    visibility: visible;
    display: flex;
    margin: 0 2em;
    margin: 0;
    list-style: none;
  }
`

const Settings = styled.div`
  visibility: hidden;

  @media ${device.tablet} {
    visibility: visible;
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
    </Bar>
  )
}

export default NavBar
