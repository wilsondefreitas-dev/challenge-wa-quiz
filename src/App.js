import './App.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import ContentContainer from './components/ContentContainer';
import logo from './logo.svg';

const RootContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  height: 100vh;
  background-color: rgb(249 249 249);

`;

const Header = styled.div`

  display: flex;

  width: 100%;
  padding: 1rem;

  text-align: center;
  background-color: white;
  color: gray;

  img{
    width: 8rem;
  }
  
`;

const MainColumn = styled(Container)`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  padding: 1rem;
  height: auto;

`;

const Footer = styled.div`

  width: 100%;
  padding: 1rem;

  text-align: center;
  background-color: white;
  color: gray;

  a:link, a:visited{
    color: rgb(77, 129, 213);
    text-decoration: none;
    font-weight: bold;
  }
  
`

function App() {
  return (
    <RootContainer>

      <Header>
        <img src={logo} alt="logo" />
      </Header>

      <MainColumn maxWidth="md">

        <Routes>

          <Route path="*" element={<ContentContainer />} />
          <Route path="/result" element={<h1>Result</h1>} />

        </Routes>

      </MainColumn>

      <Footer>/by.<a href="https://github.com/wilsondefreitas-dev" target="_blank" rel="noreferrer">Wilsondef</a></Footer>

    </RootContainer>
  );
}

export default App;