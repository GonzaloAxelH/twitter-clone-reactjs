import IconTweet from '../Icons/IconTweet'

import styled from 'styled-components'
const Btn = styled.a`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: sans-serif;
  padding: 0 32px;
  text-decoration: none;
  transition: all 0.2s;
  background: rgb(29, 155, 240);
  &:hover {
    background: rgb(26, 140, 216);
    div {
      background: rgb(26, 140, 216);
    }
  }
  border: none;
  border-radius: 50px;
  cursor: pointer;
  z-index: 1;
  box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1d9bf0;
    height: 52px;
    transition: all 0.2s;
  }
  svg {
    position: absolute;
    display: none;
    width: 20px;
    fill: #fff;
  }
  span {
    font-size: 17px;
    color: #fff;
    font-weight: bold;
  }
  @media (max-width: ${(props) =>
      props.type === 'primary' ? '1296px' : '0'}) {
    width: 52px;
    height: 51px;
    padding: 0;
    div {
      border-radius: 50%;
    }
    svg {
      display: block;
    }
    span {
      display: none;
    }
  }
`

const Button = ({ label, type, ...args }) => {
  return (
    <Btn type={type} href="#" >
      <div>
        <IconTweet />
        <span>{label}</span>
      </div>
    </Btn>
  )
}
export default Button
