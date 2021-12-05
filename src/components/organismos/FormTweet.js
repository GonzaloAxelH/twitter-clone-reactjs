import styled from 'styled-components'
import { useState } from 'react'
import InputTweet from '../moleculas/InputTweet'
import IconWorld from '../atomos/Icons/IconWorld'
import ButtonSendTweet from '../atomos/Buttons/Button'
import ImgUser from '../atomos/Img/ImgUser'
import IconEmoji from '../atomos/Icons/IconEmoji'
import IconUploadImage from '../atomos/Icons/IconUploadImage'
import IconGif from '../atomos/Icons/IconGif'
import IconPlus from '../atomos/Icons/IconPlus'
import IconPoll from '../atomos/Icons/IconPoll'
import IconCalendar from '../atomos/Icons/IconCalendar'
const Form = styled.form`

  padding:10px 16px 10px 16px;
  margin:0;
  display:flex;
  font-family: sans-serif;
  width: 100%;
`
const FormContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`

const UserPhoto = styled.div`
  margin-right: 12px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`
const FormFooter = styled.div`
  display:flex;
  min-height: 48px;
  justify-content: space-between;
  align-items: center;
  border-top:1px solid #EFF3F4;
  border-bottom:1px solid #EFF3F4;
  overflow: hidden;
  padding: 12px 0;
`
const FromSend = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  .container__button-plus{
    width: 24px;
    height: 24px;
    border:1px solid gray;
    border-radius:50%;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    transition: 0.2s all;
    svg{
      width:16px;
      height: 16px;
      fill:rgb(29, 155, 240);
    }

  }
  .container__button-plus:hover{
    background:rgb(232, 245, 253);
  }
  .container__button-tweet{
        display:flex;
        justify-content: center;
        align-items: center;
      .btn-tweet{
        width: 77px;
        height: 34px;
      }
  }
`
const LoadMethods = styled.div`
  display:flex;
  svg{
      width: 20px;
      height: 20px;
      fill:rgb(29, 155, 240);
    }
   .container__icon{
    width: 34px;
    height: 34px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:50%;
    transition:0.2s all;
    cursor:pointer;
  }
   .container__icon:hover{
      background:rgb(232, 245, 253);
   }


`
const FormOptions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Everyone = styled.div`
  display: flex;
  border: none;
  height: 25px;
  border-radius: 30px;
  transition: all 0.2s;
  align-items: center;
  padding:0 10px;
  margin:10px 0;
  cursor:pointer;
  justify-content: space-between;
  &:hover{
    background:rgb(232, 245, 253);
  }
  span{
    color:rgb(29, 155, 240);
    font-size: 13px;
    font-weight: bold;
    margin:0 0.4em;
  }
  .container__icon-wordl{
    display: flex;
    align-items: center;
    justify-content: center;
      svg{
        width: 16px;
        height: 16px;
        fill:rgb(29, 155, 240);
      }
  }
`
const FormInput = styled.div`
  display: flex;
  justify-content: flex-start;
  min-height: 28px;
  padding: 0 12px;
`
const ContainerCircle = styled.div`
      margin:0 0.5em;
      svg{
        transform: rotate(-90deg);
        fill: none;
        stroke: #1d9bf0;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-dasharray: ${(props) => props.value} 999;
    }
  `
const CircleCount = ({ value, color }) => {
  const calcPercent = (percent) => {
    const roundCircle = 11 * 2 * Math.PI
    const roundDraw = roundCircle * percent / 100
    return roundDraw
  }
  return (<ContainerCircle value={calcPercent(value)}>
          <svg viewbox="0 0 100 100" height="27" width="27">
            <circle cx="12" className="circle" cy="13" r="11" stroke={color} fill="transparent" />
          s</svg>
          </ContainerCircle>
  )
}
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

    if (count >= 99) {
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
      <FormContainer>
      <FormInput>
        <InputTweet onGetValue={onGetValue} value={valueInput.value} />
      </FormInput>
      <FormOptions>
        <Everyone >
          <div className="container__icon-wordl">
            <IconWorld />
          </div>
          <span>Everyone can reply</span>
        </Everyone>
      </FormOptions>
      <FormFooter>
        <LoadMethods>
            <div className="container__icon">
              <IconUploadImage />
            </div>
            <div className="container__icon">
              <IconGif />
            </div>
            <div className="container__icon">
              <IconPoll />
            </div>

            <div className="container__icon">
              <IconEmoji />
            </div>

            <div className="container__icon">
              <IconCalendar />
            </div>
        </LoadMethods>

        <FromSend>
          <CircleCount color={disableForm ? 'red' : '#1d9bf0'} value={valueInput.count} />
          <div className="container__button-plus">
              <IconPlus />
          </div>

          <div className="container__button-tweet">
             <ButtonSendTweet disable={disableForm} width="70%" height="36px" label="Tweet"/>
          </div>
        </FromSend>
      </FormFooter>
      </FormContainer>
    </Form>
  )
}

export default FormTweet
