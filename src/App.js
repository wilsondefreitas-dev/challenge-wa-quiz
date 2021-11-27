import './App.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`

`

function App() {
  return (
    <MainContainer>

      <Routes>

        <Route path="*" element={<h1>Quiz</h1>} />
        <Route path="/result" element={<h1>Result</h1>} />

      </Routes>

    </MainContainer>
  );
}

export default App;