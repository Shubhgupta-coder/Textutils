import React, { useState } from 'react'

export default function TextForms(props) {
   
    const handleUpClick = () => {
        // console.log("Upper case was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLoClick = () => {
        // console.log("Upper case was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = () => {
        // console.log("Upper case was clicked"+text);
        let newText ='';
        setText(newText)
        props.showAlert("Text has been cleared!", "success")
    }
  
    const handleCopy =()=>{
        var ctext = document.getElementById("mybox");

  // Select the text field
  ctext.select(); 
  ctext.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(ctext.value)
  document.getSelection().removeAllRanges();    
  console.log(ctext.value);
  props.showAlert("Copied to Clipboard!", "success")

    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="Container"  style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upprercase</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
 
        </div>
           
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} and {text.length} characters</p>    
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}


