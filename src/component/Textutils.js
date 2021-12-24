
import React, {useState}from 'react'

function Textutils(props) {
    const [text, setText] = useState('enter text here')
   const handleUpClick= ()=>{
        console.log("button was clicked");
        const newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleDnClick= ()=>{
        console.log("button was clicked");
        const newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleRtClick= ()=>{
        console.log("button was clicked");
        setText("");
    }
    const handleReClick= ()=>{
        console.log("button was clicked");
        const newtext = text.trim();
        setText(newtext);
    }

    const handleOnChange= (e)=>
    {
        setText(e.target.value);
        
    }
    return ( 
    <div>
        <h1> { props.heading } </h1> 
        <div className = "mb-3" >
        <textarea className = "form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea> 
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to upper Case</button>
        <button className='btn btn-primary' onClick={handleDnClick}>Convert to Lower Case</button>
        <button className='btn btn-primary' onClick={handleRtClick}>Remove text</button>
        <button className='btn btn-primary' onClick={handleReClick}>Remove Extra Space</button>
    </div>
    )
}

export default Textutils