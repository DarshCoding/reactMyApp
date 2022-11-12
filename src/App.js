import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";


function App() {
  // const [blueMode, setBlueMode] = useState('light');
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#051f3a';
      showAlert("Dark mode Activated", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#FFFFFF';
      showAlert("Light mode Activated", "success");
    }
  }
  return (
    <> 
      <Router>    
        <Navbar title='My App' mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/> 
        <div className="container my-3">
          <Routes>                     
            <Route exact path="/"><TextForm showAlert={showAlert} heading='My Textarea' mode={mode}/></Route>
          </Routes>
          <Routes>
            <Route exact path="/about"><About mode={mode}/></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;