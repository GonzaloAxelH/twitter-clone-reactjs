import styled from 'styled-components'
const Btn = styled.button`
  text-align: center;
  display: block;
  box-sizing: border-box;
  font-family: sans-serif;
  padding: 0 32px;
  text-decoration: none;
  background: ${(props) => props.background};
  border: none;
  border-radius: 50px;
cursor: ${(props) => props.cursor};
  z-index: 1;
  opacity: ${(props) => props.opacity};
  width: ${(props) => props.width};
  &:hover {
    background: rgb(26, 140, 216);
    div {
      background: rgb(26, 140, 216);
    }
  }
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.background};
    text-align: center;
    width: 100%;
    height:${(props) => props.height};
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
    text-align: center;
  }
`

const Button = ({ label, width, height, disable }) => {
  return (
    <Btn width={width || '100%'} height={height || '50px'} disable={disable} cursor={disable ? 'auto' : 'pointer' } background={'#1d9bf0'} opacity={disable ? '0.4' : '1'}>
      <div>
        <span>{label}</span>
      </div>
    </Btn>
  )
}
export default Button
