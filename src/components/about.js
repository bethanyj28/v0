import AboutBody from './aboutbody'
import data from '../../content/info.json'
import { device } from '../styles/devices'
import Emoji from 'react-emoji-render'
import styled from 'styled-components'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 7vh 1em 0;
`

const StyledHeader = styled.h1`
  font-size: 5vh;
  text-align: center;

  @media ${device.tablet} {
    text-align: left;
  }
`

const StyledSubheader = styled.h2`
  text-align: center;
  padding: 1em 0;

  @media ${device.tablet} {
    text-align: left;
  }
`

const About = () => {
  return (
    <AboutContainer id="about">
      <StyledHeader>
        <Emoji text={data.about.header} />
      </StyledHeader>
      <StyledSubheader>
        <Emoji text={data.about.subheader} />
      </StyledSubheader>
      <AboutBody />
    </AboutContainer>
  )
}

export default About
