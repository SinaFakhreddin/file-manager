import React from 'react';
import {AiFillFile} from "react-icons/ai"
import {AiFillFolderOpen} from "react-icons/ai"
import {useNavigate} from "react-router-dom";
import { useDispatch} from "react-redux";
import {setChangeFolder} from "../../../redux/actions/index.jsx";
import {truncateFunction} from "../../../helper/index.js";

const DashboardDataComponents = ({title , items , type , setShowGallery}) => {
    const navigate  = useNavigate()
    const dispatch = useDispatch()



    const hashMapNavigate = {
        folder :async (id)=> {
           await navigate(`/dashboard/folder/${id}`)
            dispatch(setChangeFolder(id))
        },
        file:async (id)=>{
            alert("uploaded")
            await navigate(`/dashboard/file/${id}`)
            dispatch(setChangeFolder(id))
        },
        Uploaded :async (id)=>{
           const selectedItem = items?.find((item)=>item.docId === id)
            const filteredItems = items?.filter((item)=>item.docId!==id)
            const sortedItems = [selectedItem , ...filteredItems]
            setShowGallery({
                gallery:true,
                galleryItems : sortedItems
            })

        }
    }


    const handleDoubleClick = async (id )=>{
        hashMapNavigate[type](id)
        // type==="folder" && await navigate(`/dashboard/folder/${id}`)
        // dispatch(setChangeFolder(id))
        // type ==="file" && await navigate(`/dashboard/file/${id}`)
        // dispatch(setChangeFolder(id))
    }


    return (
        <div className={'w-full flex flex-col items-center border gap-4'}>
            <span className={'text-md font-semibold my-4'}>{title}</span>
            <div className={'w-[90%] p-4 flex gap-4 flex-wrap  mx-auto'}>
                {
                    items?.map((item , index)=>{
                        console.log("item",item)
                        return (
                            <div onClick={()=>handleDoubleClick(item.docId  )} className={'flex w-[30%] flex-col items-center gap-2 cursor-pointer  p-4 border shadow-md rounded-lg '} key={index}>
                                {
                                    type ==="file" ? <AiFillFile size={40}/> :
                                        type === "folder"?
                                        <AiFillFolderOpen size={40}/> :
                                            <div className={'w-full h-full shadow'}>
                                                <img className={'h-full w-full object-contain rounded'} src={item.url} alt={item.name}/>
                                            </div>
                                }

                                <span className={'text-sm font-semibold'}>{truncateFunction(item?.name , 20)}</span>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default DashboardDataComponents;
