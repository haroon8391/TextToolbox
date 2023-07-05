import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from './Components/Contact';

function App() {
  const [mode, setMode] = useState("light");
  const [textCol, setTextCol] = useState("dark");


  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextCol("light");
      document.body.style.backgroundColor = "#363738";
    }
    else {
      setMode("light");
      setTextCol("dark");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="React" mode={mode} changeMode={changeMode} textCol={textCol} />
        <div className="container my-4">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm heading="TextUtils - Word Counter, Character Counter" mode={mode} />} />
            <Route path='/Contact' element={<Contact mode={mode} />} ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
