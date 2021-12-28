import React, {useState}from 'react'
function Textutils(props) {
	const [text, setText] = useState('')
   const handleUpClick= ()=>{
		// console.log("button was clicked");
		const newtext = text.toUpperCase();
		if(text===newtext)
		{
			props.showAlert('Text already in UPPER CASE!!','warning');
		}
		else
		{
			setText(newtext);
			props.showAlert('Text converted to UPPER CASE!! Successfully','success');
		}
	}
	const handleDnClick= ()=>{
		// console.log("button was clicked");
		const newtext = text.toLowerCase();
		if(newtext === text)
		{
			props.showAlert('Text already in lower case!!','warning');
		}
		else
		{
			setText(newtext);
			props.showAlert('Text converted to lower case!! Successfully','success');
		}
}
	const handleRtClick= ()=>{
		// console.log("button was clicked");
		if(text.length===0)
		{
			props.showAlert('Nothing present in the text box to clear!!','warning')
		}
		else
		{
			setText("");
			props.showAlert('Text cleared!! Successfully','success');
		}
}
	const handleReClick= ()=>{
		// console.log("button was clicked");
		const newtext = text;
		const arr= newtext.split(/[ ]+/);
		const newtxt=arr.join(" ");
		if(newtxt===text)
		{
			props.showAlert("Text Don't have Extra spaces!!",'warning');
		}
		else
		{
			setText(newtxt);
			props.showAlert('Extra space removed from the text Successfully','success');
		}
}

	const handleOnChange= (e)=>
	{
		setText(e.target.value);	
	}
	const handleCopy=()=>
	{
		var text= document.getElementById("mybox");
		text.select();
		navigator.clipboard.writeText(text.value);
		props.showAlert('Text Copied!! Successfully','success');
	}
	return ( 
		<div style={{backgroundColor:props.mode==='dark'?'rgb(12 21 49)':'white', color:props.mode==='dark'?'white':'black'}}>
	<div className='container my-3' >
		<h1> { props.heading } </h1> 
		<div className = "mb-3" >
		<textarea className = "form-control" id="mybox" rows="8" value={text} style={{backgroundColor:props.mode==='dark'?'rgb(12 21 49)':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}></textarea> 
		</div>
		<button className='btn btn-primary mx-2 my-3' onClick={handleUpClick}>Convert to upper Case</button>
		<button className='btn btn-primary mx-2 my-3' onClick={handleDnClick}>Convert to Lower Case</button>
		<button className='btn btn-primary mx-2 my-3' onClick={handleRtClick}>Clear text</button>
		<button className='btn btn-primary mx-2 my-3' onClick={handleReClick}>Remove Extra Space</button>
		<button className='btn btn-primary mx-2 my-3' onClick={handleCopy}>Copy Text</button>
	</div>
	<div className='container my-4'style={{backgroundColor:props.mode==='dark'?'rgb(12 21 49)':'white', color:props.mode==='dark'?'white':'black'}}>
		<h1>Your Text Summary 
		</h1>
		<p><strong>{text.split(" ").length}</strong> words and <strong>{text.length}</strong> characters</p>
		<p>Time to read this text is: <strong style={{color:'red'}}> {0.008*text.split(" ").length}</strong></p>
		<h2>Preview</h2>
		<p>{text.length>0?text:"enter some text in the text field to preview it here"}</p>
	</div>
	<hr/>
	</div>
	)
}
export default Textutils;