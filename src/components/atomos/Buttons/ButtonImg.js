import styled from "styled-components";
const Button = styled.a`
  width: 100%;  
  div {
     position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    transition: 0.2s all;
    width: ${props => props.width};
    height:${props => props.height};
    border-radius: 50%;
    padding: 0;
    marign: 0;
  }
  div:hover {
    background: #e8f5fe;
  }
  svg {
    position: absolute;
    fill: #1d9bf0;
  }
`;
const ButtonImg = ({ Icon ,width,height}) => {
  return (
    <Button width={width} height={height} href="#home">
      <div>
        <Icon />
      </div>
    </Button>
  );
};

export default ButtonImg;
