
import FileComponentHeader from "./FileComponentHeader/index.jsx";
import FileComponentEditor from "./FileComponentEditor/index.jsx";
import {useEffect, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import fire from "../../configs/index.js";

const FileComponent = () => {
    const [data, setData] = useState("");
    const {fileId} = useParams()
    const dispatch = useDispatch()
    const {currentFileData} = useSelector(state=>({
        currentFileData : state?.fileFolders?.userFiles?.find((file)=>file?.docId === fileId)
    }),shallowEqual)

    useEffect(() => {
        setData(currentFileData?.data)
    }, [currentFileData]);

    return (
        <div className={'flex flex-col'}>
            <FileComponentHeader currentFileData={currentFileData} prevData={currentFileData?.data} data={data}/>
            <FileComponentEditor currentFileData={currentFileData} data={data} setData={setData}/>
        </div>
    );
};

export default FileComponent;
