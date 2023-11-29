import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const tomato = "rgb(199, 75, 20)"
const transparent = "rgb(255,255,255,0.22)"

const Container = styled('div', {
  alignItems: "center",
  background: tomato,
  color: "white",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "center"
})

const Form = styled('form', {
  background: transparent,
  borderRadius: "10px",
  height: "40rem",
  width: "30rem"
})

const Result = styled('div', {
  fontSize: "3rem",
  fontWeight: "600"
})

const ResetButton = styled('button', {
  
})
const SubmitButton = styled('button', {
})

const Title = styled('h1', {
  borderRadius: "10px",
  fontFamily: "'Shrikhand', serif",
  fontSize: "4rem",
  marginLeft: "-10rem",
  textShadow: "-10px 10px black",
  // set the width to force test on different lines
  width: "20rem"
})

const WeightInput = styled('input', {
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

function App() {
  const [numberInput, setNumberInput] = useState(0)
  const [resultString, setResultString] = useState("")
  const [yarnSelection, setYarnSelection] = useState("")
  const [formComplete, setFormComplete] = useState(false)

  useEffect(() => {
    if(numberInput > 0 && yarnSelection !== "") {
      setFormComplete(true)
    }
  },[yarnSelection])

  function YarnTypeDropdown() {
    return (
      <DropdownButton id="dropdown-basic-button" title="Select Yarn Weight">
        {weightStrings.map((item, index) => {
          return (
            <Dropdown.Item
              onClick={() => setYarnSelection(index)}
              key={index}
            >{item}</Dropdown.Item>
          )
        })}
      </DropdownButton>
    );
  }

  const calculateWeight = (type, weight) => {
    const hundredGramYardage = yardagePer100Grams[type]

    const minLength = (hundredGramYardage[0] / 100) * weight
    const maxLength = (hundredGramYardage[1] / 100) * weight

    return [minLength, maxLength]
  }

  const handleChange = (e) => {

    const isNumber = str => {
      const numbers = /^[0-9]+$/
      return str.match(numbers)
    }

    if (isNumber(e.target.value) || e.target.value === "") {
      setNumberInput(e.target.value)
    }
  }

  const handleReset = () => {
    setNumberInput(0)
    setResultString("")
    setYarnSelection("")
    setFormComplete(false)
  }

  const handleSubmit = () => {
    const resultArray = calculateWeight(yarnSelection, numberInput)

    setResultString(`${resultArray[0].toFixed(2)} to ${resultArray[1].toFixed(2)} yards`)
  }
  return (
    <Container>
      <Title>Yarn Yardage Calculator</Title>
      <Form onSubmit={e => e.preventDefault()}>
        <WeightInput
          onChange={handleChange}
          type="number"
          value={numberInput}
        />
        <YarnTypeDropdown />
        <SubmitButton
          disabled={!formComplete}
          type="submit"
          onClick={() => handleSubmit()}
        >Calculate Yardage</SubmitButton>
        <ResetButton
          onClick={() => handleReset()}
        >Reset Results</ResetButton>
        <Result>{resultString}</Result>
      </Form>
    </Container>
  )
}

export default App;
