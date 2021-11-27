import "./App.css";
import styled from "styled-components";
import PagesRoutes from "./components/Routes/PageRoutes";
import Head from "./components/Templates/Header/Header";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <AppContainer>
      <Head />
      <PagesRoutes />
    </AppContainer>
  );
}

export default App;
