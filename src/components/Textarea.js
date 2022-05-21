import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textarea(props) {

    // function updateUseStateDictionary(myDic, updateValue) {
    //     let newDic = myDic;
    //     for (let i = 0; i < Object.keys(updateValue).length; i++) {
    //         newDic[Object.keys(updateValue)[i]] = Object.values(updateValue)[i]
    //     }

    //     return newDic
    // }



    const [textValue, setTextValue] = useState(props.placeholder);

    const writeText = (event) => {
        setTextValue(event.target.value);
    }

    const makeUpperCase = (event) => {
        setTextValue(textValue.toUpperCase());
    }

    const ret = 'ramkrushn'

    return (
        <div className='container my-4'>
            <h1>Welcome in Text Utils</h1>
            <textarea name="text" id="text" placeholder={props.placeholder} onChange={writeText} cols="100" value={textValue} rows="10" autoFocus></textarea><br />
            <button className='btn-primary my-4' onClick={makeUpperCase}>Upper Case</button>
            <button className='btn-primary my-4 mx-4' onClick={() => setTextValue(textValue.toLowerCase())}>lower case</button>
            <button className='btn-primary my-4' onClick={() => setTextValue('')}>Clear Text</button>
            <p>Your Text Length is {textValue.length}</p>
            <p>Your Text Word Is {textValue.length === 0 || textValue.endsWith(' ') ? textValue.split(' ').length - 1 : textValue.split(' ').length}</p>
            <p>Avrage reading time for this text is {textValue.length === 0 || textValue.endsWith(' ') ? (textValue.split(' ').length - 1) * 0.25 / 6 : textValue.split(' ').length * 0.25 / 6} min.</p>
            <h4>
                Preview:
            </h4>
            <p>{textValue}</p>
        </div >
    )
}

Textarea.propTypes = {
    placeholder: PropTypes.string
}

Textarea.defaultProps = {
    placeholder: 'Enter Your Text Here'
}

