import styled from "styled-components";
const Btn = styled.a`
  text-align: center;
  display: block;
  box-sizing: border-box;
  font-family: sans-serif;
  padding: 0 32px;
  text-decoration: none;
  background: #1d9bf0;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  z-index: 1;
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1d9bf0;
    height: 50px;
    text-align: center;
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
`;

const Button = ({ label }) => {
  return (
    <Btn href="#">
      <div>
        <span>{label}</span>
      </div>
    </Btn>
  );
};
export default Button;
