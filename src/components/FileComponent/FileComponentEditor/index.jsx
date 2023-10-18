import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {duotoneDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import {useEffect, useRef, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import "./fileComponentEditor.css"
import fire from "../../../configs/index.js";
import {addFilesHandler, setLoading} from "../../../redux/actions/index.jsx";


const FileComponentEditor = ({currentFileData ,userId , setData , data}) => {
    const dispatch = useDispatch()

    const {userFiles} = useSelector(state => ({
        userFiles : state?.fileFolders?.userFiles,
        userId:state?.auth?.user?.uid,
    }),shallowEqual)

    const languages = {
        html:"xml",
        php:"php",
        js:"javascript",
        jsx:"jsx",
        txt:"txtfile",
        xml:"xml",
        css:"css",
        c:'clike',
        java:"java",
        cs:"clike",
        py:"python",
        json:"javascript"


    }


    const handleKeyDown = (evt)=>{
        // let value = content,
        //     selStartPos = evt.currentTarget.selectionStart
        // console.log(evt.currentTarget)
        //
        //
        // if (evt.key ==="Tab"){
        //     value = value.substring(0,selStartPos) + "    " +value.substring(selStartPos,value.length);
        //     evt.currentTarget.selectionStart = selStartPos + 3
        //     evt.currentTarget.selectionEnd = selStartPos + 4
        //     evt.preventDefault()
        //     setData(value)
        // }
    }






    return (
       <div className={'w-full p-4 bg-gray-100 bg-opacity-50 shadow-lg'}>
               <div className={'mx-auto code-editor-container rounded'}>
                    <textarea
                      className={'w-full code-input'}
                    value={data}
                    onKeyDown={handleKeyDown}
                    autoCorrect={false}
                    spellCheck={false}
                    onChange={(e)=>setData(e.target.value)}
                    />
                   {/*<pre className={'code-output'}>*/}
                       <SyntaxHighlighter
                           language={languages[currentFileData?.name.split(".")[1]]}
                           showLineNumbers
                           style={duotoneDark}
                           wrapLines
                           startingLineNumber={1}
                       >
                            {data}
                       </SyntaxHighlighter>

                   {/*</pre>*/}
               </div>
       </div>

    );
};

export default FileComponentEditor;


// <div  role="button"
//       tabIndex={0}
//       className="relative
//       flex
//     "
// >
//          <textarea
//         className="absolute inset-0 resize-none bg-transparent p-2 font-mono  caret-white outline-none"
//         value={data}
//              onKeyDown={handleKeyDown}
//         onChange={(e) => setData(e.target.value)}
//          />
//     <SyntaxHighlighter
//         language={languages[currentFileData?.name.split(".")[1]]}
//         showLineNumbers
//         showInlineLineNumbers
//         lineNumberStyle={{backgroundColor:"red" , paddingLeft:0}}
//         style={gruvboxDark}
//         wrapLongLines
//         customStyle={{
//             backgroundColor: "transparent",
//             opacity: "1",
//         }}
//         codeTagProps={{
//             style: {
//                 color: "white",
//             },
//         }}
//         startingLineNumber={1}
//     />
{/*{currentFileData?.name?.split(".")[currentFileData?.name?.split(".").length-1]}*/}
// {/*</div>*/}