import React, {useState} from 'react'


export default function TextForm(props) {
   const handleUpClicked=()=>{
    //console.log("upper case was clicked");
    let newText=Text.toUpperCase();
    setText(newText);
    props.showalert("Converted To UpperCase","Success");
   }
   const handledownclicked=()=>{
    let latestText=Text.toLowerCase();
    setText(latestText);
    props.showalert("Converted To LowerCase","Success");
   }
   const handleCharCode=()=>{
let nt=Text.charCodeAt(Text);
alert(nt);
   }
    const handleOnChange=(event)=>{
        //console.log("On change");
        setText(event.target.value);

    }
    const handleClearClicked=()=>{
        let newtxt=Text;
        newtxt=(" ");
        setText(newtxt);
        props.showalert("Text Cleared","Success");
    }
    const [Text,setText]=useState('');
    
  return ( 
    <>
    <div className="container" style={{color:props.Mode==='dark'?'white':'black'}}>

    
  <div className="mb-3">
    <h1 className='head'>{props.heading}</h1>
    <textarea className="form-control" id="MyBox" onChange={handleOnChange} style={{backgroundColor:props.Mode==="dark"?"grey":"white",color:props.Mode==='dark'?'white':'black'}} value={Text} rows="8"></textarea>
    <button type="button" className="btn btn-primary"  onClick={handleUpClicked}>UPPERCASE</button>
<div className="btn my-5">
    <button type="button" className="btn btn-primary" onClick={ handledownclicked}>LOWERCASE</button>
    <button type="button" className="btn btn-primary mx-3" onClick={ handleCharCode}>charCodeAt</button>
    <button type="button" className="btn btn-primary mx-3" onClick={handleClearClicked }>Clear Text</button>
    

    </div>
  </div>
  </div>
  <div className="container " style={{color:props.Mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{Text.trim().split(" ").filter((e)=>e!=="").length} Words & {Text.length} Characters</p>
    <p>{0.008* Text.trim().split(" ").filter((e)=>e!=="").length} Minutes Required To Read The Content</p>
    <h2>Preview</h2>
    <p>{Text}</p>
  </div>
  </>
  )
}
