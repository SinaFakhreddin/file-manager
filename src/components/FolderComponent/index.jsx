import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {shallowEqual, useSelector} from "react-redux";
import DashboardDataComponents from "../DashboardComponent/dashboardDataComponents/index.jsx";
import GalleryComponent from "../GalleryComponent/index.jsx";

const FolderComponent = () => {
     const {folderId}= useParams()
    const [showGallery, setShowGallery] = useState({
        gallery:false,
        galleryItems:[]
    });
    const {currentFolderData , childFolders , childFiles , currentUploadedFileData} = useSelector((state)=>({
        currentFolderData : state.fileFolders.userFolders.find((folder)=>folder.docId===folderId),
        // childFolders:state.fileFolders.userFolders.filter((folder)=>folder.parent===folderId),
        // childFiles:state.fileFolders.userFiles.filter((file)=>file.parent===folderId),
        childFolders : state?.fileFolders?.userFolders.filter((folder)=>folder.path.includes(`/${folderId}`)),
        childFiles:state?.fileFolders?.userFiles?.filter((file)=>file?.path?.length>1 && file?.path[file?.path?.length-1]===`/${folderId}`),
        currentUploadedFileData:state?.fileFolders?.userFiles?.filter((uploadedFile)=>uploadedFile.url!=null && uploadedFile.parent===folderId )

    }),shallowEqual)

    console.log("currentUploadedFileData",currentUploadedFileData)
    console.log("HERER")

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
                {
                    currentUploadedFileData.length > 0 ?
                    <DashboardDataComponents setShowGallery={setShowGallery}  type={'Uploaded'}  title={"UPLOADED FILES"} items={currentUploadedFileData}/> : <p className={'text-xl  w-full p-8 flex justify-center items-center rounded-lg shadow font-bold text-red-600'}>No Uploaded Files</p>
                }
                { showGallery.gallery &&
                    <GalleryComponent data={showGallery.galleryItems} setShowGallery={setShowGallery}/>
                }
            </div>

        </div>
    );
};

export default FolderComponent;
