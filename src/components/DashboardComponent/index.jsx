import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import DashboardNavbar from "./dashboardNavbar/index.jsx";
import MyDialogue from "../Dialogue/index.jsx";
import {FileFormLogic} from "../fileFormComponent/fileForm/FileFormLogic.jsx";
import {CreateFolderFormLogic} from "../FolderFormComponent/FolderForm/FolderFormLogic.jsx";
import {Routes , Route} from "react-router-dom"
import DashboardHome from "../DashboardHome/index.jsx";
import FolderComponent from "../FolderComponent/index.jsx";
import {setCurrentRoute} from "../../redux/actions/index.jsx";
import FileComponent from "../FileComponent/index.jsx";
import {UploadFormLogic} from "../uploadForm/uploadFormLogic/index.jsx";


const DashboardComponent = () => {
    const navigate = useNavigate()
    const [createFoldersModal, setCreateFoldersModal] = useState(false);
    const [createFilesModal, setCreateFilesModal] = useState(false);
    const [uploadModal, setUploadModal] = useState(false);
    const {userFolders , user  , currentFolder ,isAuthenticated , userFiles,currentFolderData,currentRoute , progressUploadFile} = useSelector((state)=>({
        userFolders : state?.fileFolders?.userFolders ,
        user:state?.auth?.user,
        userId:state?.auth?.user?.uid,
        currentFolder:state?.fileFolders?.currentFolder,
        isAuthenticated:state?.auth?.isAuthenticated,
        isLoading:state?.fileFolders?.isLoading,
        currentFolderData:state?.fileFolders?.userFolders?.find((folder)=>folder.docId===state.fileFolders.currentFolder),
        currentRoute : state?.fileFolders?.currentRout,
        userFiles:state?.fileFolders?.userFiles,
        progressUploadFile:state?.fileFolders?.progressUploadFile
    }), shallowEqual)

    console.log("fileFolder",progressUploadFile)
    const dispatch = useDispatch()
    const [showSubBar, setShowSubBar] = useState(true);


    useEffect(() => {
       if (!isAuthenticated){
           navigate('/')
       }
    }, []);

    useEffect(() => {
        if (window.location.pathname.includes("folder")){
        dispatch(setCurrentRoute(window.location.pathname.split("/folder")))
        }else {
            dispatch(setCurrentRoute(window.location.pathname.split("/file")))
        }
    }, [navigate]);


    useEffect(() => {
        if (window.location.pathname.includes("/file") || window.location.pathname.includes("/pic") || window.location.pathname.includes("/video")) {
            setShowSubBar(false)
        } else setShowSubBar(true)
    }, [currentRoute]);


    return (
        <>
            {
                showSubBar && <DashboardNavbar createFoldersModal={setCreateFoldersModal} createFilesModal={setCreateFilesModal} uploadModal={setUploadModal}/>
            }
            <Routes>
                <Route path={''} element={<DashboardHome/>}/>
                <Route path={'folder/:folderId'} element={<FolderComponent/>}/>
                <Route path={'file/:fileId'} element={<FileComponent/>}/>
            </Routes>
            {createFoldersModal && <MyDialogue title={"CREATE FOLDERS"} closeModal={()=>setCreateFoldersModal(false)} children={<CreateFolderFormLogic showModal={setCreateFoldersModal} userFolders={userFolders}  user={user} currentFolder={currentFolder} dispatch={dispatch} currentRoute={currentRoute} currentFolderData={currentFolderData}/>}/>}
            {createFilesModal && <MyDialogue title={"CREATE FILES"} closeModal={() => setCreateFilesModal(false)} children={<FileFormLogic showModal={setCreateFilesModal} userFiles={userFiles}  user={user} currentFolder={currentFolder} dispatch={dispatch} currentRoute={currentRoute} />}/>}
            {uploadModal && <MyDialogue title={"UPLOAD FILES"} closeModal={() => setUploadModal(false)} children={<UploadFormLogic userFiles={userFiles}  user={user} currentFolder={currentFolder} dispatch={dispatch} currentRoute={currentRoute} showModal={setUploadModal} progressUploadFile={progressUploadFile}/>}/>}

        </>
    );
};

export default DashboardComponent;
