import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to UPPERCASE', 'success');
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to lowercase', 'success');
    }

    const clearText = () => {
        setText('');
        props.showAlert('Cleared text', 'success');
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        setText(event.target.value);
    }

    const removeSpace = () => {
        var temText = '';
        var textSplit = text.split(" ");
        for (var i = 0; i < textSplit.length; i++) {
            temText += textSplit[i];
        }
        setText(temText);
        props.showAlert('Space has been removed', 'success');
    }

    const word = () => {
        if (text.length === 0) {
            return "0";
        }
        else {
            var txt = text.split(/\s+/);
            var words = 0;
            for (var i = 0; i < txt.length; i++) {
                if (txt[i] !== "") {
                    words++;
                }
            }
            return words;
        }
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className={`container`}>
                <h1 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeSpace}>Remove Extra Spaces</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h2>Your text summary</h2>
                <p>{word()} words and {text.length} characters</p>
                <p>{text.length === 0 ? 0 : 0.004 * text.split(/\s+/).length} Minutes reading time</p>
                <h2>Text Preview</h2>
                <p>{text.length === 0 ? 'Enter text to text' : text}</p>
            </div>
        </>
    )
}