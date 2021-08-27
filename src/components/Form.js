import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setPreview(newText);
        props.showAlert('Text converted to UPPERCASE', 'success');
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setPreview(newText);
        props.showAlert('Text converted to lowercase', 'success');
    }

    const clearText = () => {
        setText('');
        props.showAlert('Cleared text', 'success');
    }

    const copyText = () => {
        navigator.clipboard.writeText(preview);
        props.showAlert('Text copied', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        setPreview(event.target.value);
    }

    const removeSpace = () => {
        var temText = '';
        var textSplit = text.split(" ");
        for (var i = 0; i < textSplit.length; i++) {
            temText += textSplit[i];
        }
        setPreview(temText);
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
    var color;
    if (props.mode === 'dark') {
        color = 'light';
    }
    else {
        color = 'dark';
    }

    const [preview, setPreview] = useState('');
    const [text, setText] = useState('');
    return (
        <>
            <div className={`container text-${color}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={removeSpace}>Remove Extra Spaces</button>
            </div>
            <div className={`container my-3 text-${color}`}>
                <h2>Your text summary</h2>
                <p>{word()} words and {text.length} characters</p>
                <p>{text.length === 0 ? 0 : 0.004 * text.split(/\s+/).length} Minutes reading time</p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? 'Enter text to preview' : preview}</p>
            </div>
        </>
    )
}