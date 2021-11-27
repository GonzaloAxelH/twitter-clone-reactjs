import styled from "styled-components";
const Button = styled.a`
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    transition: 0.2s all;
    width:40px;
    height:40px;
    border-radius: 50%;
  }
  div:hover {
    background: #e8f5fe;
  }
  svg {
    position: absolute;
    fill: #1d9bf0;
  }
`;
const ButtonImg = ({ Icon }) => {
  return (
    <Button href="#home">
      <div>
        <Icon />
      </div>
    </Button>
  );
};

export default ButtonImg;
