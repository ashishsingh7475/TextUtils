import React, {useState} from 'react'
export default function Textbox(props) {
    const handleOnChange =(e)=>{
        setText(e.target.value)
       
    }
    const handleOnClick =()=>{
        const newText = text;
        setText(newText.toUpperCase())
        props.showAlert("the text has been set to upper case" , "success")       
    }
    const handleOnClick2 =()=>{
        const newText = text;
        setText(newText.toLowerCase())
        props.showAlert("the text has been set to lower case" , "success")        
        
    }
    const handleClearClick =()=>{
        const newText = "";
        setText(newText.toLowerCase())
        props.showAlert("the text has been cleared" , "success")      
        
    }
    
    
    const [text, setText] = useState('')
    return (
      <div>
        <h1 className={`text-${props.mode ==="light"?"dark":"light"} my-3`}>Textbox</h1>
      <div className="mb-3">
        <textarea className = {`form-control bg-${props.mode} text-${props.mode ==="light"?"dark":"light"}`} style={{border:"none"}} placeholder="enter text here" value={text} onChange= {handleOnChange}id ="myBox" rows="13"></textarea>
      </div>
      <button className = "btn btn-primary mx-2 my-2 " onClick={handleOnClick}>Convert To Uppercase</button>
      <button className = "btn btn-primary mx-2" onClick={handleOnClick2}>Convert To Lowercase</button>
      <button className = "btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
      <p></p>
      <h2 className={`text-${props.mode ==="light"?"dark":"light"}`}>Your text summary has</h2>
    <i><p className={`text-${props.mode ==="light"?"dark":"light"}`}>{text.split(" ").length} words and {text.length} characters</p></i>
      
    <i><p className={`text-${props.mode ==="light"?"dark":"light"}`}>{0.008* text.split(" ").length} minutes read</p></i>
    <h2 className={`text-${props.mode ==="light"?"dark":"light"}`}>Preview</h2>
    <i><p className={`text-${props.mode ==="light"?"dark":"light"}`}>{text}</p></i>
    </div>
    
  )
}
