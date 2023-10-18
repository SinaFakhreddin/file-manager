import React, {useEffect} from 'react';
import {BiSolidSave} from "react-icons/bi";
import {RiArrowGoBackLine} from "react-icons/ri";
import {useNavigate, useParams} from "react-router-dom";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import fire from "../../../configs/index.js";
import {toast} from "react-toastify";
import {saveFileDataHandler} from "../../../redux/actions/index.jsx";

const FileComponentHeader = ({currentFileData , data , prevData}) => {
    const navigate = useNavigate()
    const [disabledBtn, setDisabledBtn] = useState(true);
    const dispatch  = useDispatch()




    useEffect(() => {
        if (prevData===data) {
            setDisabledBtn(true)
        } else setDisabledBtn(false)

    }, [data]);

    const saveDataHandler = () =>{
        alert("Hi")
        const fileId = currentFileData?.docId
        fire.firestore().collection("files").doc(fileId).update({data}).then(async ()=>{
            await dispatch(saveFileDataHandler({fileId , data}))
            toast.success("file has been updated")
            setDisabledBtn(true)
        }).catch((e)=>toast.error(`an error was occured: ${e}`))
    }

    return (
        <div className={'w-full shadow'}>
            <div className={'w-[90%] mx-auto py-3 flex justify-between items-center'}>
                <div className={'text-md font-bold'}> {currentFileData?.name}</div>
                <div>
                    {
                        prevData !==data && <span className={'text-lg font-bold text-red-400'}>*[modified]</span>
                    }
                </div>
                <div className={'flex gap-4'}>
                    <button onClick={saveDataHandler} disabled={prevData===data} className={`flex item-center text-white  rounded-md py-2 px-4 gap-2 font-bold ${disabledBtn ? "hover:cursor-not-allowed bg-green-200" : "hover:bg-green-500 bg-green-400"}`}>
                        <BiSolidSave size={25}/>
                        Save
                    </button>
                    <button onClick={()=>navigate(-1)} className={'bg-gray-500 flex items-center gap-2 hover:bg-gray-400 text-white font-bold px-4 py-2 rounded-md'}>
                        <RiArrowGoBackLine size={25}/>
                        Go Back</button>
                </div>
            </div>
        </div>

    );
};

export default FileComponentHeader;
