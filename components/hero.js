import styled from 'styled-components'
import data from '../content/info.json'

const HeroContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-start;
  flex-direction: column;
  height: 50vh;
`

const StyledHeader = styled.h1`
  font-size: 10vh;
`

const Hero = () => {
  return (
    <HeroContainer>
      <StyledHeader>
        {data.first_name} {data.last_name}
      </StyledHeader>
    </HeroContainer>
  )
}

export default Hero
