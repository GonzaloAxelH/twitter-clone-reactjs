import styled from "styled-components";
import Asside from "../Templates/Asside/Asside";
import Tweets from "../Templates/Tweets/Tweets";
const Container = styled.div`
  flex:10;
  display: flex;
  width: 100%;
`;

const HomeContainer = ({ children }) => {
  return (
    <Container>
      {children}
      <Asside />
    </Container>
  );
};

const Home = () => {
  return (
    <HomeContainer>
      <Tweets />
    </HomeContainer>
  );
};

export default Home;
