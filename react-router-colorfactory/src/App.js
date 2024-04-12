import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Home';
import ColorForm from './ColorForm';
import ColorPage from './ColorPage';
import { useState } from 'react';

function App() {
  const [colors, setColors] = useState({blue: 'blue', green: 'green', yellow:'yellow'})

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/colors" element={<Home colors={colors} setColors={setColors} />} />
          <Route path="/colors/:color" element={<ColorPage colors={colors}/>} />
          <Route path="colors/new" element={<ColorForm colors={colors} setColors={setColors}/>} />
          <Route path='*' element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
