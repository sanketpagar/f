
import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color:'black',
    backgroundColor:'white'
})
const [btntext, setbtntext] = useState("Enable Dark Mode")
const toggleclicked=()=>{
if(myStyle.color === 'black'){
    setmyStyle({
        color:'white',
        backgroundColor:'black'    
    })
    setbtntext("Enable Light Mode")
}
    else{
        setmyStyle({
            color:'black',
            backgroundColor:'white'    
        })
        setbtntext("Enable Dark Mode")
    }
}

  return (
    <>
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Instagram
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <code>wwww.instagram/sanketpagar.com</code> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
            Linked In
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
             <code>www.Linkedin/sanketpagar/fdgwg/serve/?/.com</code> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
             Twitter
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
             <code>www.Twitter/@sanketpagar0412/fghw/?/.com</code> 
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="contain my-3"></div>
    <button className="btn btn-primary my-3" onClick={toggleclicked}>{btntext}</button>
    </>
  );
}
