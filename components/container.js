import styled from 'styled-components'

const StyledDiv = styled.div`
  max-width: 960px;
  height: 100vh;
  margin: 0 auto;
`

export default function Container({ children }) {
  return <StyledDiv>{children}</StyledDiv>
}
