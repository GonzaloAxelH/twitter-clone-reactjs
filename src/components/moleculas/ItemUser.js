import ImgUser from "../atomos/Img/ImgUser";
import styled from "styled-components";
import IconPoints from "../atomos/Icons/IconPoints";
const User = styled.div`
  display: grid;
  grid-template-columns: 40px 153.25px auto;
  font-family: sans-serif;
  transition: 0.2s all;
  border-radius: 100px;
  cursor: pointer;
  padding: 12px;
  &:hover {
    background: #eff1f1;
  }
  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0.3em;
    max-width: 153.25px;
  }
  div:nth-child(3) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  p {
    margin: 0;
    font-weight: bold;
    font-size: 15px;
  }
  span {
    font-size: 15px;
    color: #546471;
  }
  svg {
    width: 18.75px;
    height: 18.75px;
  }
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  @media (max-width: 1296px) {
    width: auto;
    grid-template-columns: 50px;

    div:nth-child(2) {
      display: none;
    }

    div:nth-child(3) {
      display: none;
    }
  }
`;

const ItemUser = () => {
  return (
    <User>
      <div>
        <ImgUser url="https://pbs.twimg.com/profile_images/1448421775768002561/Ed4LJw_c_normal.jpg" />
      </div>
      <div>
        <p>gonzalo valdez</p>
        <span>@gonzalo355139248</span>
      </div>
      <div>
        <IconPoints />
      </div>
    </User>
  );
};

export default ItemUser;
