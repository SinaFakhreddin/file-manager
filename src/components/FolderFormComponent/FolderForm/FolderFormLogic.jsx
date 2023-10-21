import React from 'react';
import {withFormik} from "formik";
import {CreateFormSchema} from "../../../schemas/index.js";
import CreateFolderFormTemplate from "./FolderFormTemplate.jsx";
import {toast} from "react-toastify";
import {createFolder} from "../../../redux/actions/index.jsx";
import fire from "../../../configs/index.js";
import { v4 as uuidV4 }from "uuid"
import {compareTwoArrayOfString} from "../../../helper/index.js";


export const CreateFolderFormLogic = withFormik({
    mapPropsToValues:(props)=>{
        return {
            name:""
        }
    },
    handleSubmit:async (values, {props})=>{
       try{

           const folderPresent = props?.userFolders?.filter((folder)=>folder?.data?.parent===props.currentFolder).find((folder)=>folder?.data?.name===values.name)
           const isFolderAlreadyExist = props?.userFolders?.find((folder)=>folder?.name===values?.name && compareTwoArrayOfString(folder.path , props.currentRoute))
           folderPresent!=undefined && toast.error("someThing Wend Wrong")
           isFolderAlreadyExist && toast.warning("Folder is already exist")
               const data = {
                   createdAt :new Date(),
                   name:values.name,
                   userId:props.user.uid,
                   createdBy:props.user.displayName,
                   path:props.currentRoute,
                   parent:props.currentFolder,
                   lastAccess:null,
                   updatedAt:new Date(),
                   docId:uuidV4()

               }
               fire.firestore().collection("folders").add(data).then(async (folder)=>{
                   const folderData = await (await folder.get()).data()
                   props.dispatch(createFolder(folderData))
                   toast.success("folder is created successfully")
               }).catch(error=>toast.error(`${error}`))

       }catch (e) {
           toast.error(`${e}`)
       }

    },
    validationSchema:CreateFormSchema
})(CreateFolderFormTemplate)


