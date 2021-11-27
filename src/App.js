import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>

      <Route path="*" element={<h1>Quiz</h1>} />
      <Route path="/result" element={<h1>Result</h1>} />

    </Routes>
  );
}

export default App;