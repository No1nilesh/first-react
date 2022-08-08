
import './App.css';
import Navbar from './components/Navbar';
import React,{useState} from 'react';
import TextForm from './components/TextForm';
// import About  from './components/About';
import Alert from './components/Alert'
// import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";


function App() {
const [mode, setmode] = useState('light');
const [alert, setAlert] = useState(null)

const showAlert =(message, type)=>{
setAlert({
  msg: message,
  type:type
})
setTimeout(() => {
  setAlert(null);
}, 1500);
}
const toggleMode =()=>{
  if(mode=== 'light'){
    setmode('dark')
    document.body.style.backgroundColor = '#2E0249';
    showAlert("Dark Mode has been enabled", "success");
    
  }else{
    setmode('light')
    document.body.style.backgroundColor = 'white';
   showAlert("Light Mode has been enabled", "success")
  }
}

  return (
    <>
    {/* <Router> */}
 <Navbar title="TextUtils" abouText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
 {/* <Navbar/> */}
 <Alert alert={alert}/>
 <div className="container my-3">
  {/* <Routes> */}
    {/* <Route path="/about" element={<About/>}/> */}
    {/* <Route path='/' element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>}/> */}
    <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>
  {/* </Routes> */}
 
 </div>
 {/* </Router> */}
    </>
  )
}

export default App;
