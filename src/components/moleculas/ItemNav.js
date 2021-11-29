import styled from "styled-components";
const Item = styled.a`
  font-family:sans-serif;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: 0.2s all;
  min-width:234px;
  height: 50.25px;
  svg {
    width: 26.25px;
  }
  svg:nth-child(1){
    display:${(props)=> props.active ? "flex":"none"};
  }
  svg:nth-child(2){
    display:${(props)=> props.active ? "none":"flex"};
  }
  span {
    font-weight: ${(props) => (props.active ? "bold" : "300")};
    color: #000;
    padding:0 1em ;
  }
  div {
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
  }
  div:hover {
    background: #e6e7e7;
  }
  @media (max-width: 1296px) {
    display: flex;
    transition: 0.2s all;
    min-width: 50.25px;
    height: 50.25px;
    border-radius: 50%;
    div {
      width: 50.25px;
      height: 50.25px;
      display: flex;
    padding: 0;
      justify-content: center;
    }
    svg {
      width: 26.25px;
    }
   
    &:hover {
      background: #e6e7e7;
    }

    span {
      display:none;  
      font-size:20px;
    }
`;
const ItemNav = ({ Icon, text, active, onClick }) => {
  return (
    <Item href="#" active={active} onClick={onClick}>
      <div>
        <Icon />
        <span>{text}</span>
      </div>
    </Item> 
  );
};

ItemNav.propTypes = {};

ItemNav.defaultProps = {};

export default ItemNav;
