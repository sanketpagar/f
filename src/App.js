/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
import Alert from './Components/Alert';


function App() {
  const [Mode, setMode] = useState("light")
  const [alert, setalert] = useState(null);
  const [Mde, setMde] = useState("light")
  const [Mdde, setMdde] = useState("light")

  const showalert=(message,type)=>{
setalert({
  msg:message,
  tp:type
})
 setTimeout(() =>{
 setalert()
}, 2000);
  }
  const toggle=()=>{
    if(Mde==="light"){
      setMde("green")
      document.body.style.backgroundColor="green";
      showalert("Green Mode is enabled","success");
    }
    else{
      setMde("light")
      document.body.style.backgroundColor="white";
      showalert("Light Mode is enabled","success");
    }
  }
  const togglle=()=>{
    if(Mdde==="light"){
      setMdde("red")
      document.body.style.backgroundColor="red";
      showalert("Red Mode is enabled","success");
    }
    else{
      setMdde("light")
      document.body.style.backgroundColor="white";
      showalert("Light Mode is enabled","success");
    }
  }
  const toggleMode=()=>{
    if(Mode==="light"){
      setMode("dark")
      showalert("darkmode is enabled","success");
      document.body.style.backgroundColor="#042743";
      
    }
    else {
      setMode("light")
      showalert("light is enabled","success");
      document.body.style.backgroundColor="white";
      
    
    }
  }
  
   return (
    <>

<Navbar  title="WordChange" Text="Home" Mdde={Mdde} togglle={togglle} Mde={Mde} toggle={toggle} Mode={Mode} toggleMode={toggleMode}/>
<div className="container">
  <Alert alert={alert}/>
<TextForm showalert={showalert} heading="Enter The Text Here" Mdde={Mdde} Mde={Mde} Mode={Mode} />
<About/>
</div>
    </>
  );
}

export default App;
