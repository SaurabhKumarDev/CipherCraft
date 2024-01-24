import React, { useState } from "react";
import PropTypes from 'prop-types'
import '../App.css'

export default function TextForm(props) {

    // Harry
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Sentence in UpperCase', 'success')
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Sentence in LowerCase', 'success')
    }
    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Sentence Cleared', 'success')
    }
    const generateEmail = () => {
        let ran = Math.floor(Math.random() * 4);
        let postfixEmail = ['gmail.com', 'email.com', 'hangout.com', 'upi.com'];
        let prefix = '';
        let arr = text.split(' ');

        for (let iterator of arr) {
            prefix += iterator[0];
        }

        let email = prefix.toLowerCase() + arr.length + '@' + postfixEmail[ran];
        setText(email);
        props.showAlert('Email generated', 'success')
    }
    const copyText = () => {
        const text = document.querySelector('.my-textArea');
        navigator.clipboard.writeText(text.value);
    }

    let numberOfWord = text.split(/\s/).filter((element) => { return element.length !== 0 }).length;

    return (
        <>
            <div className={`mt-5 container bg-${props.bgColor}`}>
                <h3 className={`text-${props.textColor} mb-4`}>Please input the text for analysis below</h3>
                <textarea className="form-control my-textArea" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className="btn btn-primary mt-3" onClick={handleUpClick} disabled={text.length === 0}>Change to UpperCase</button>
                <button className="btn btn-primary mt-3 changeLRMarginBtn" onClick={handleLowClick} disabled={text.length === 0}>Change to LowerCase</button>
                <button className="btn btn-primary mt-3 mr-4" onClick={generateEmail} disabled={text.length === 0}>Generate Email</button>
                <button className="btn btn-primary mt-3 mr-4" onClick={copyText} disabled={text.length === 0}>Copy</button>
                <button className="btn btn-primary mt-3 mr-4" onClick={handleClear} disabled={text.length === 0}>Clear</button>
            </div>
            <div className={`container my-5 bg-${props.bgColor} text-${props.textColor}`}>
                <h4 className={`mb-3`}>Your text summary</h4>
                <p> {numberOfWord} Text and {text.length} Character</p>
                <p>{(numberOfWord * 0.008).toFixed(3)} Reading time (minute)</p>
            </div>
            <div className={`container text-${props.textColor} bg-${props.bgColor}`}>
                <h4 className="mb-3">Preview</h4>
                <p className="text-justify">{text.length > 0 ? text : 'Enter some text to see effects'}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    word: PropTypes.number,
    char: PropTypes.number,
}

TextForm.defaultProps = {
    word: 0,
    char: 0
}