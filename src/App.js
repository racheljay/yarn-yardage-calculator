import { styled } from '@stitches/react';

const Container = styled('div', {
  background: "teal",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  margin: "2rem",
  width: "80rem",
})
const Input = styled('input', {
  width: "5rem"
})

function App() {
  return (
  <Container>
    <h1>Yarn Yardage Calculator</h1>
    <Input></Input>
  </Container>
  )
}

export default App;
