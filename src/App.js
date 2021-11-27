import './App.css';
import { Routes, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <>

      <Button variant="contained" color="primary">
        Hello World
      </Button>

      <Routes>

        <Route path="*" element={<h1>Quiz</h1>} />
        <Route path="/result" element={<h1>Result</h1>} />

      </Routes>
    </>
  );
}

export default App;