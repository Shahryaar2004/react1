import React, { useState } from 'react'; // Ensure React is imported
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('dark');
  const [mode1, setMode1] = useState('dark'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // Update here to `alert` instead of `Alert`

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null); // Clear the alert after some time
    }, 3000); // Adjust time as needed
  };

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  function toggleMode1() {
    if (mode1 === 'light' ) {
      setMode1('red');
      document.body.style.backgroundColor = 'red';
      showAlert("Disco mode has been enabled", "success");
    } else {
      setMode1('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>

<Route>
<Navbar 
        title="Text Utils" 
        about="About" 
        mode={mode} 
        toggleMode={toggleMode} 
        toggleMode1={toggleMode1} 
      />
      <Alert alert={alert} /> 
          <Route path="/about">
            <About/>
          </Route>
          
          <Route path="/">
            <div className="container my-3">
        <TextForm  heading="Enter your text below" mode={mode} />
      </div>
          </Route>
        </Route>
        
      
      
      </BrowserRouter> 
    </>
  );
}

export default App;
