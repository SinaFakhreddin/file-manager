import React from 'react';
import {AiOutlineFolderAdd} from "react-icons/ai"
import {AiOutlineFileAdd} from "react-icons/ai"
import {AiOutlineUpload} from "react-icons/ai"
import BreadCrumb from "../../BreadCrumb/index.jsx";

const DashboardNavbar = ({createFilesModal,createFoldersModal,uploadModal, createDragAndDropModal}) => {
    return (
        <div className={'shadow bg-white w-full'}>
            <div className={'w-[90%] mx-auto flex justify-between items-center py-4'}>
                <div>
                    <BreadCrumb/>
                </div>
                <div className={'self-end'}>
                    Admin Folder
                </div>
                <div className={'flex gap-2'}>
                    <button onClick={()=>uploadModal(true)} className={'border flex items-center gap-2 border-gray-400 px-2 py-2 rounded hover:bg-black hover:text-white'}>
                        <AiOutlineUpload size={25}/>
                        Upload File
                    </button>
                    <button onClick={()=>createFilesModal(true)} className={'border flex items-center gap-2 border-gray-400 px-2 py-2 rounded hover:bg-black hover:text-white'}>
                        <AiOutlineFileAdd size={25}/>
                        Create File
                    </button>
                    <button onClick={()=>createFoldersModal(true)} className={'border flex items-center gap-2 border-gray-400 px-2 py-2 rounded hover:bg-black hover:text-white'}>
                        <AiOutlineFolderAdd size={25}/>
                        Create Folder
                    </button>

                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;
