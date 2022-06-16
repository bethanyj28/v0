import { device } from '../styles/devices'
import styled from 'styled-components'

const sections = ['about', 'blog', 'contact']

const Links = styled.ul`
  list-style: none;
  text-align: right;

  @media ${device.tablet} {
    text-align: center;
    display: flex;
    margin: 0 2em;
    list-style: none;
  }
`

const Link = styled.a`
  text-decoration: none;
  font-size: 5vh;
  color: var(--primary-text);
  position: relative;
  margin: 4em 0.5em;

  &:before {
    content: '';
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

  @media ${device.tablet} {
    font-size: inherit;
    margin: 0 2em;
  }
`

const NavLinks = () => {
  return (
    <Links>
      {sections.map((section) => (
        <li key={section}>
          <Link href={`#${section}`}>{section}</Link>
        </li>
      ))}
    </Links>
  )
}

export default NavLinks
