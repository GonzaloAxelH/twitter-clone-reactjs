import NavLeft from "./components/organismos/NavLeft";
import "./App.css";
import styled from "styled-components";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemUser from "./components/moleculas/ItemUser";

const PageContainer = styled.div`

`;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  @media (max-width: 1296px) {
  }
`;

const Header = styled.header`
  display: flex;
  border-right: 1px solid #e6e7e7;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 1em;
  nav {
    width: 251px;
    min-width: 251px;
  }
  .content {
    height: 100vh;
    display:flex;
    width:auto;
    flex-direction:column;
    justify-content:space-between;
  }
  @media (max-width: 1296px) {
    nav {
      width: 50px;
    }
  }
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <div className="content">
          <NavLeft />
          <p></p>
          <ItemUser />
        </div>
      </Header>
      <PageContainer>
        <Router>
          <Routes>
            <Route exact path="/" component={<Home />} />
          </Routes>
        </Router>
      </PageContainer>
    </AppContainer>
  );
}

export default App;
