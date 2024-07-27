import './App.css'
import Navbar from './components/Navbar'
import Textbox from './components/Textbox'
import Alert from './components/Alert'
// import About from './components/About'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";


import React,{useState} from'react'

function App() {
  const [mode,setMode] = useState('light')
  const[alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type,
   })
   setTimeout(()=>{
    setAlert("");
   },1000);
  }
  const toggleMode=()=>{
    if(mode=== "light"){
      setMode("dark")
      document.body.style.backgroundColor="black"
      showAlert("dark mode enabled successfully", "success")
      
    }
    else{
      setMode ("light")
      document.body.style.backgroundColor="white"
      showAlert("dark mode disbled successfully", "success")

    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}></Navbar>
    <div className="container">
    <Alert alert={alert}/>
    {/* <Routes> */}
        {/* <Route path="/about" element={<About/>}/> */}
        <Textbox mode={mode} showAlert={showAlert}/>
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
