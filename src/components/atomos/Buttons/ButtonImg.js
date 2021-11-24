import styled from "styled-components";
const Button = styled.a`
  div {
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    transition: 0.2s all;
    width: 50px;
    height: 50px;
    border-radius:50%;
  }
  div:hover {
    background: #e8f5fe;
  }
  svg {
    position: absolute;
    width: 50px;
    fill:#1D9BF0;
    height: 30px;
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
