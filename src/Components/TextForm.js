import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const upperCaseClicked = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "Success");
    }

    const handleClear = () => {
        setText("");
    }

    // const occuranceClicked = () => {
    //     let split = text.split(" ");
    //     let obj = {};

    //     for (let i = 0; i < split.length; i++) {
    //         if (obj[split[i]] === undefined) {
    //             obj[split[i]] = 1;
    //         } else {
    //             obj[split[i]]++;
    //         }
    //     }

    //     console.log(obj);
    // }

    const handleCopy = () => {
        let copyText = document.getElementById("myTextBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }


    const lowerCaseClicked = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "Success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "#363738" }}>
                <div className="mb-1">
                    <h2>{props.heading}</h2>
                    <label htmlFor="myTextBox" className="form-label"></label>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "light" ? "white" : "#363738", color: props.mode === "dark" ? "white" : "#363738" }} placeholder="Enter Text here" onChange={handleOnChange} id="myTextBox" rows="6"></textarea>
                    <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={upperCaseClicked}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={lowerCaseClicked}>Convert to Lowercase</button>
                    <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={handleCopy}>Copy to Clipboard</button>
                    <button disabled={text.length === 0} className='btn btn-danger my-2 mx-1' onClick={handleClear}>Clear Text</button>
                </div>
            </div >
            <div className="container my-5" style={{ color: props.mode === "dark" ? "white" : "#363738" }}>
                <h2>Your text Summary</h2>
                <p>{(text.split(" ").filter((element) => { return element.length !== 0 }).length)} words and {text.length} characters</p>
                <p>{0.008 * ((text.split(" ").filter((element) => { return element.length !== 0 }).length))} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
