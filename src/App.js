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

// Data includes a min and max for each entry
const yardagePer100Grams = [
  [850, 950],
  [440, 460],
  [330, 440],
  [250, 350],
  [170, 220],
  [110, 140],
  [60, 110],
  [10, 30]
]

const weightStrings = [
  "0 - Lace",
  "1 - Super Fine",
  "2 - Fine",
  "3 - Light",
  "4 - Medium",
  "5 - Bulky",
  "6 - Super Bulky",
  "7 - Jumbo"
]

const calculateWeight = (type, weight) => {
  const hundredGramYardage = yardagePer100Grams[type]

  const minLength = (hundredGramYardage[0] / 100) * weight
  const maxLength = (hundredGramYardage[1] / 100) * weight

  return [minLength, maxLength]
}

function App() {
  return (
  <Container>
    <h1>Yarn Yardage Calculator</h1>
    <Input></Input>
  </Container>
  )
}

export default App;
