import React, { useState } from 'react'
function About() {
    const [mystyle, setMyStyle] =useState({
        color:'black',
        backgroundColor:'white'
    }) 
    const [mode, setMode]= useState("Enable Dark Mode");
    
    const handleMode= ()=>{
        if(mystyle.color ==='black')
        {
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setMode("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setMode("Enable Dark Mode")
        }

    }
  return (
    <div style={mystyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne" style={mystyle}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
        About
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        Contact:- <u>+91-8923083289</u><br/>
        <a href='https://www.linkedin.com/in/ashish-singh-4b802a1a2/'>linkedIn</a><br/>
        <a href='https://www.instagram.com/___sanskarichora/'>Instagram</a><br/>
        <a href='https://github.com/wizard3107'>GitHub</a>

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo" style={mystyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
        Functionality of editor
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the description of the fucntionality of this editor.</strong>This upper case button will convert the text of the input area into the upper case.<br/> The <strong>Lower Case</strong> button will convert the text into lowercase. <br/>The <strong>Clear Text</strong> button will clear the text area completly.<br/> The <strong>Remove Extra Space</strong> button will delete all the spaces between the words and make it into a single word.<br/>
        There is a word counter attached below the buttons which tells you the number of words present in the text area.<br/>
        A timer is also present which tells you that in how much time will the document can be read.<br/>
        With the help of the <strong>Enable Dark Mode</strong> button user can enable the dark mode on the webpage.
      </div>
    </div>
  </div>
</div>
<button className='btn btn-primary my-3' onClick={handleMode}>{mode}</button>
    </div>
  )
}

export default About
