import styled from "styled-components";
import IconHome from "../atomos/Icons/IconHome";
import IconList from "../atomos/Icons/IconList";
import IconMore from "../atomos/Icons/IconMore";
import IconSearch from "../atomos/Icons/IconSearch";
import IconCampana from "../atomos/Icons/IconCampana";
import IconMessage from "../atomos/Icons/IconMessage";
import IconBookmark from "../atomos/Icons/IconBookmark";
import IconBird from "../atomos/Icons/IconBird";
import IconProfile from "../atomos/Icons/IconProfile";
import ItemNav from "../moleculas/ItemNav";
import ButtonImg from "../atomos/Buttons/ButtonImg";
import ButtonTweet from "../atomos/Buttons/ButtonTweet";

import { useState } from "react";
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width:251px;
  max-width:251px;
  div:nth-child(3){
    margin:0.3em 0;
  }
`;
const NavLeft = () => {
  const [select, setSelect] = useState(0);
  return (
    <Nav>
      <div>
        <ButtonImg Icon={() => <IconBird />} />
      </div>
      <div>
        <ItemNav
          onClick={()=> setSelect(0)}
          Icon={() => <IconHome />}
          text="Home"
          active={select == 0}
        />
        <ItemNav
          onClick={() => setSelect(1)}
          Icon={() => <IconSearch />}
          text="Explore"
          active={select == 1}
        />
        <ItemNav
          onClick={() => setSelect(2)}
          Icon={() => <IconCampana />}
          text="Notifications"
          active={select == 2}
        />
        <ItemNav
          onClick={() => setSelect(3)}
          Icon={() => <IconMessage />}
          text="Messages"
          active={select == 3}
        />
        <ItemNav
          onClick={() => setSelect(4)}
          Icon={() => <IconBookmark />}
          text="Bookmarks"
          active={select == 4}
        />
        <ItemNav
          onClick={() => setSelect(5)}
          Icon={() => <IconList />}
          text="List"
          active={select == 5}
        />
        <ItemNav
          onClick={() => setSelect(6)}
          Icon={() => <IconProfile />}
          text="Profile"
          active={select == 6}
        />
        <ItemNav
          Icon={() => <IconMore />}
          text="More"
        />
      </div>
      <div>
        <ButtonTweet label="Tweet" backgroundColor="" />
      </div>
    </Nav>
  );
};

export default NavLeft;
