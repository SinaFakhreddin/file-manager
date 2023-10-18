import React from 'react';
import {useParams} from "react-router-dom";
import {shallowEqual, useSelector} from "react-redux";
import DashboardDataComponents from "../DashboardComponent/dashboardDataComponents/index.jsx";

const FolderComponent = () => {
     const {folderId}= useParams()
    const {currentFolderData , childFolders , childFiles} = useSelector((state)=>({
        currentFolderData : state.fileFolders.userFolders.find((folder)=>folder.docId===folderId),
        // childFolders:state.fileFolders.userFolders.filter((folder)=>folder.parent===folderId),
        // childFiles:state.fileFolders.userFiles.filter((file)=>file.parent===folderId),
        childFolders : state?.fileFolders?.userFolders.filter((folder)=>folder.path.includes(`/${folderId}`)),
        childFiles:state?.fileFolders?.userFiles?.filter((file)=>file?.path?.length>1 && file?.path[file?.path?.length-1]===`/${folderId}`)

    }),shallowEqual)



    return (
        <div className={'flex justify-center w-full'}>
            <div className={'w-[90%] flex gap-8 flex-col items-center justify-center my-6 mx-auto'}>
                {
                    childFolders.length > 0 ?
                        <DashboardDataComponents type={'folder'} title={"CHILD FOLDER"} items={childFolders}/>
                        :
                        <p className={'text-xl  w-full p-8 flex justify-center items-center rounded-lg shadow font-bold text-red-600'}>empty folder </p>

                }
                {
                    childFiles?.length > 0 ?
                        <DashboardDataComponents type={"file"} title={"CHILD FILE"} items={childFiles}/>: <p className={'text-xl  w-full p-8 flex justify-center items-center rounded-lg shadow font-bold text-red-600'}>empty Files</p>
                }
            </div>

        </div>
    );
};

export default FolderComponent;
