import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/Textform';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');  // dark mode neabled or not
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Enabled", "success");
      // document.title = 'Textutils - Dark Mode'
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      // document.title = 'Textutils - Light Mode'

    }
  }
  return (
    <>
     <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
        <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForms showAlert={showAlert} heading="Try TextUtils - Word Counter , Character Counter , Remove extra spaces " mode={mode} />}/>
          {/* <TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
        </Routes>

      </div>
      </Router>
    </>

  );
}

export default App;
