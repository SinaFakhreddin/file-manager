import React, {useState} from 'react';
import DashboardDataComponents from "../DashboardComponent/dashboardDataComponents";
import {addFilesHandler, addFolder, setLoading} from "../../redux/actions/index.jsx";
import fire from "../../configs/index.js";
import {useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import GalleryComponent from "../GalleryComponent/index.jsx";

const DashboardHome = () => {
    const dispatch = useDispatch()
    const [showGallery, setShowGallery] = useState({
        gallery:false,
        galleryItems:[]
    });
    const {userFolders  , userId , isLoading , userFiles } = useSelector((state)=>({
        userFolders : state?.fileFolders?.userFolders?.filter((folder)=>folder.path.length===1 && folder.path[0]==="/dashboard") ,
        // userFolders : state?.fileFolders?.userFolders?.filter((folder)=>folder.parent==="root") ,
        user:state?.auth?.user,
        userId:state?.auth?.user?.uid,
        currentFolder:state?.fileFolders?.currentFolder,
        isAuthenticated:state?.auth?.isAuthenticated,
        isLoading:state?.fileFolders?.isLoading,
        userFiles:state?.fileFolders?.userFiles?.filter((file)=>(file?.path?.length===1 && file?.path[0]==="/dashboard") || file?.parent==="root")
        // userFiles:state?.fileFolders?.userFiles?.filter((file)=>file?.fileData?.path.length===1 && file?.fileData?.path[0]==="/dashboard")
        // userFiles : state?.fileFolders?.userFiles?.filter((file)=>file?.parent==="root")
        // userFiles : state?.fileFolders?.userFiles?.filter((file)=>file.path?.length===1 && file.path[0]==="/dashboard")

    }), shallowEqual)

    const getFolder  =(id)=>{
        fire.firestore().collection("folders").where("userId" , "==" , id).get().then(async (folders)=>{
            const foldersData = await folders.docs.map((folder)=>folder.data())
            dispatch(addFolder(foldersData))
            dispatch(setLoading(false))
        })
    }


    const getFiles  =(id)=>{
        fire.firestore().collection("files").where("userId" , "==" , id).get().then(async (files)=>{
            const fileData =  files.docs.map((file)=>({...file.data() , docId:file.id}))
            dispatch(addFilesHandler(fileData))
            dispatch(setLoading(false))
        })
    }


    useEffect(() => {
        if ( isLoading && userId){
            getFolder(userId)
            getFiles(userId)
        }
    }, [ isLoading,userId , dispatch]);

    return (
        <>
            {
                !isLoading ? <>
                    <DashboardDataComponents type={'folder'} items={userFolders} title={"CREATED FOLDER"}/>
                    <DashboardDataComponents type={'file'} items={userFiles?.filter((file)=>file?.url==null)} title={"CREATED FILES"}/>
                    <DashboardDataComponents setShowGallery={setShowGallery} type={'Uploaded'} items={userFiles?.filter((file)=>file?.url!=null)} title={"UPLOADED FILES"}/>
                    { showGallery.gallery &&
                        <GalleryComponent data={showGallery.galleryItems} setShowGallery={setShowGallery}/>
                    }
                </> : <div className={'flex justify-center'}><span>loading...</span></div>
            }

        </>
    );
};

export default DashboardHome;
