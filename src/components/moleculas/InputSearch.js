import IconSearch2 from '../atomos/Icons/IconSearch2'
import styled from 'styled-components'
import IconEquis from '../atomos/Icons/IconEquis'
const InputSearchContent = styled.form`
  border: 1px solid transparent;
  &:hover {
    background: #fff;
    border: 1px solid #1d9bf0;
    span:nth-child(1) svg {
      fill: #1d9bf0;
    }
  }

  height: 41.77px;
  border-radius: 50px;
  background: #eff3f4;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span:nth-child(1) svg {
    width: 40px;
    height: 18.75px;
    padding: 0 0 0 5px;
  }

  span:nth-child(2) svg {
    width: 10px;
    height: 10px;
    fill: #fff;
  }
  span:nth-child(2) {
    width: 22px;
    height: 22px;
    background: #1d9bf0;
  }
  input {
    width: 100%;
    padding: 12px 12px 12px 5px;
    box-sizing: border-box;
    outline: none;
    border: none;
    background: transparent;
  }
`
const InputSearch = () => {
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <InputSearchContent id="id">
      <div>
        <span>
          <IconSearch2 />
        </span>
        <input onSubmit={onSubmit} placeholder="Search Twitter" />
        <span>
          <IconEquis />
        </span>
      </div>
    </InputSearchContent>
  )
}

export default InputSearch
