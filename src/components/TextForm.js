import React, {useState} from 'react'
// import PropTypes from 'prop-types';
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked "  + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to Upper case", "success");
    }
    const handleDownClick = () =>{
        console.log("Lowercase was Clicked " + text)
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Text changed to Lower case", "success");
    }
    const handleClear = () =>{
        let newText =""
        setText(newText)
        props.showAlert("Text is Cleared", "success");
    }
    const handleonChange =(event)=>{
        console.log("On change")
        setText(event.target.value)
        
    }
   
   
    const [text, setText] = useState('');
    // setText("bIaIGdc");
    const handleCopy =() =>{
        const copyText = document.getElementById("exampleFormControlTextarea1");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        // alert('copied the text:' + copyText.value)
        props.showAlert("Copied the Text", "success");
    }
  return (
    <>
    <div className='container'style={{color: props.mode==='dark'?'white':'black'}} >
        
<div className="mb-3">
    <h1>{props.heading}</h1>
 
  <textarea className="form-control" placeholder='Enter text here' id="exampleFormControlTextarea1" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'#570A57':'white',color: props.mode==='dark'?'white':'black'}}  rows="8"></textarea>
</div>
<button className="btn btn-primary " onClick={handleUpClick}> UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleDownClick}>LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        
        <p>{text.length>0?text:"Enter something to prevew it here"}</p>
    </div>
    </>
  )
}
