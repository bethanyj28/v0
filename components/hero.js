import styled from 'styled-components'
import data from '../content/info.json'
import { device } from '../styles/devices'

const HeroContainer = styled.div`
  display: relative;
  top: 15vh;
  padding-top: 25vh;
`

const StyledHeader = styled.h1`
  font-size: 10vh;
  margin: 0;

  @media ${device.tablet} {
    font-size: 15vh;
  }
`

const StyledTagline = styled.h2`
  font-size: 2.5vh;
  color: var(--secondary-text);
  margin: 0;

  @media ${device.tablet} {
    font-size: 5vh;
  }
`

const Hero = () => {
  return (
    <HeroContainer>
      <StyledHeader>
        <span>{data.first_name}</span>
      </StyledHeader>
      <StyledHeader>
        <span>{data.last_name}</span>
      </StyledHeader>
      <StyledTagline>{data.hero.tag_line}</StyledTagline>
    </HeroContainer>
  )
}

export default Hero
