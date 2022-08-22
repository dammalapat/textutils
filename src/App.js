
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type) =>
  {
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(() => {
      setAlert(null)
    }
, 3000);
  }
  const toggleMode =()=>{
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success ")
      document.title='text utils-lightmode'
    }
      else{
        setMode('dark');
        document.body.style.backgroundColor='grey';
        document.title='text utils-darkmode'
        showAlert("dark mode has been enabled","success ")
        // setInterval(() => {
        //   document.title='install text utils'
        // }, 1000);

        // setInterval(() => {
        //   document.title=' text utils is amazing'
        // }, 1500);
      }

    }
  return (
   <>
 
<Router>

{/* <Navbar title="textutils2" aboutText="about textutils" mode={mode} togglemode={togglemode} /> */}
    
<Navbar title="textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
<Routes>
          <Route path="/about" element={ <About />}/>
          <Route path="/" element={<Textform heading="enter text to analyse" mode={mode} showAlert={showAlert}/>} />
</Routes>        
</div>
</Router>
 

  </>
  
  );
}

export default App;
