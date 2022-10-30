import { styled } from 'twin.macro'

export const TestRadioButton = () => {
  return (
    <Label>
      <Input type="radio" />
      <SpanOutside />
      <SpanInside />
      <InputLabel>テストラベル</InputLabel>
    </Label>
  )
}

const Label = styled.label`
  margin: 2em;
  display: block;
  position: relative;
  padding-left: 40px;
  cursor: pointer;
`

const Input = styled.input`
  height: 1px;
  width: 1px;
  opacity: 0;
`

const SpanOutside = styled.span`
  display: inline-block;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -15px;
  width: 30px;
  height: 30px;
  border: 1px solid red;
  border-radius: 50%;
  box-sizing: border-box;
  background: white;
`
const SpanInside = styled.span`
  position: absolute;
  display: inline-block;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: #444;
  left: 5px;
  top: 2px;
`

const InputLabel = styled.span``
