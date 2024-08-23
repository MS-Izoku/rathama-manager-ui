import React, {useState} from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const TextEditor = (props) => {

    // State to handle changes in the text editor content
    const [content, setContent] = useState(props.content ? props.content : "")

    const title = props.title ? props.title : "Text Editor";
    const className = props.className ? props.className : "";
    const titleClass = props.titleClass ? props.titleClass : "";

    // Quill modules configuration
    const modules = {
        toolbar: [
          [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' },
          { 'indent': '-1' }, { 'indent': '+1' }],
          ['link', 'image', 'video'],
          ['clean']
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        }
      };

    return (
        <div>
            <div className={className}>
               <h2 className={titleClass}>{title}</h2>
            </div>

            <ReactQuill 
            className="h-[10rem]" 
            theme='snow'
            formats={['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video']}
            placeholder="Write something amazing..."
            modules={modules}
            onChange={setContent} // Handle text editor content changes
            value={content} // Set the value of the text editor in content
            />

        </div>
    );
};

export default TextEditor;