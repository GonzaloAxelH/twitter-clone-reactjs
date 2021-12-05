import autosize from 'autosize'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const TextArea = styled.textarea`
  height: 28px;
  width: 98%;
  outline: none;
  font-size: 20px;
  font-weight: 300;
  border: none;  
  padding: 12px 0 12px 0;
  font-family: sans-serif;
  word-wrap: break-word;
  resize: none;
`
const ContainerTextarea = styled.div`
  width: 100%;
`
const InputTweet = ({ onGetValue, value }) => {
  const textTareaRef = useRef()
  useEffect(() => {
    const ta = textTareaRef.current
    autosize(ta)
  })
  const onChange = () => {
    onGetValue(textTareaRef.current.value, textTareaRef.current.value.length)
  }
  return (
    <ContainerTextarea>

  <TextArea
      placeholder="What`s happening ? "
      ref={textTareaRef}
      value={value}
      onChange={onChange}
    ></TextArea>
    </ContainerTextarea>

  )
}

export default InputTweet
