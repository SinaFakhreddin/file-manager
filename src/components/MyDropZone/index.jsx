import React from 'react';
import {useDropzone} from "react-dropzone";

const MyDropZone = (props) => {
    const {setFieldValue} = props

    const {getRootProps , getInputProps , isDragActive} = useDropzone({
        onDrop:(acceptedFiles =>setFieldValue(acceptedFiles[0]) ),
        onDropAccepted:(files => console.log("files",files)),
        onDragEnter:(event => console.log("event",event)),
        onDropRejected:(fileRejections => console.log("rejected",fileRejections)),
        onFileDialogOpen:(()=>alert("HI"))
    })


    return (
        <div {...getRootProps({className:"dropzone"})}>
            <input  {...getInputProps}/>
        </div>
    );
};

export default MyDropZone;
