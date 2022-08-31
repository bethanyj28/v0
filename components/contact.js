import data from '../content/info.json'
import Emoji from 'react-emoji-render'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const StyledHeader = styled.h1`
  font-size: 5vh;
  text-align: center;
`

const StyledSubheader = styled.h2`
  text-align: center;
`

const StyledButton = styled.a`
  background: var(--primary-bg);
  border: 1px solid var(--primary-text);
  border-radius: 3px;
  color: var(--primary-text);
  font-size: 2.5vh;
  padding: 1rem 1.25rem;
  text-decoration: none;
  margin: 1em;
`

const SocialDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15vw;
`

const SocialLink = styled.a`
  text-decoration: none;
  color: var(--primary-text);
`

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <StyledHeader>
        <span>Questions, comments, want to chat?</span>
      </StyledHeader>
      <StyledSubheader>
        <Emoji text={'Drop me a line :phone:'} />
      </StyledSubheader>
      <StyledButton href={`mailto:${data.email}`}>
        <Emoji text={'Say hello :open_mailbox_with_raised_flag:'} />
      </StyledButton>
      <SocialDiv>
        <SocialLink href="https://github.com/bethanyj28">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/bethanyjanos/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </SocialLink>
      </SocialDiv>
    </ContactContainer>
  )
}

export default Contact
