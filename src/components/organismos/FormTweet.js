import styled from 'styled-components'
import { useState } from 'react'
import InputTweet from '../moleculas/InputTweet'
import ButtonTweet from '../atomos/Buttons/ButtonTweet'
import ImgUser from '../atomos/Img/ImgUser'
const Form = styled.form`
  width: 300px;
  font-family: sans-serif;
  textarea {
    font-family: sans-serif;
    width: 300px;
    word-wrap: break-word;
  }
`
const Count = styled.div`
  background: ${(props) => (props.disable ? 'red' : '#04AA6D')};
  font-size: 12px;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 1em;
  display: flex;
  font-weight: bold;
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
`
const UserPhoto = styled.div`
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`

const FormTweet = () => {
  const [valueInput, setValueInput] = useState({ value: '', count: 0 })
  const [disableForm, setDisableForm] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(valueInput)
  }

  const onGetValue = (value, count) => {
    setValueInput({ value, count })
    console.log(valueInput)

    if (count >= 40) {
      setDisableForm(true)
    } else {
      setDisableForm(false)
    }
  }
  return (
    <Form onSubmit={onSubmit}>
      <UserPhoto>
        <ImgUser url="https://pbs.twimg.com/profile_images/1448421775768002561/Ed4LJw_c_normal.jpg" />
      </UserPhoto>
      <InputTweet onGetValue={onGetValue} value={valueInput.value} />
      {/* inputimagenes content */}
      {/* round buttons */}
      <ButtonTweet type="submit" label="Tweet" />
      <Count disable={disableForm}>
        {' '}
        <span>{valueInput.count}</span>
      </Count>
    </Form>
  )
}

export default FormTweet
