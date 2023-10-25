import { styled } from '@stitches/react';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Form = styled('form', {
})

const Result = styled('div', {
  fontSize: "3rem",
  fontWeight: "600"
})

const WeightInput = styled('input', {
})

const SubmitButton = styled('button', {

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


function YarnTypeDropdown() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Select Yarn Weight">
      {weightStrings.map((item, index) => {
        return (
          <Dropdown.Item
            onClick={() => console.log(item)}
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

function App() {
  const [numberInput, setNumberInput] = useState(0)

  const handleChange = (e) => {

    const isNumber = str => {
      const numbers = /^[0-9]+$/
      console.log(str)
      return str.match(numbers)
    }

    if (isNumber(e.target.value)) {
      setNumberInput(e.target.value)
    }
  }
  return (
    <>
      <h1>Yarn Yardage Calculator</h1>
      <Form onSubmit={e => e.preventDefault()}>
        <WeightInput
          onChange={handleChange}
          type="number"
          value={numberInput}
        />
        <YarnTypeDropdown />
        <SubmitButton>Calculate Yardage</SubmitButton>
        <Result>ha</Result>
      </Form>
    </>
  )
}

export default App;
