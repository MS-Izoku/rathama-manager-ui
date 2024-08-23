import React from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const TextEditor = (props) => {
    const title = props.title ? props.title : "Text Editor";
    const className = props.className ? props.className : "";
    const titleClass = props.titleClass ? props.titleClass : "";

    return (
        <div>
            <div className={className}>
               <h2 className={titleClass}>{title}</h2>
               <ReactQuill theme='snow'/>
            </div>
        </div>
    );
};

export default TextEditor;