import React from 'react';
import {withFormik} from "formik";
import {CreateFormSchema} from "../../../schemas/index.js";
import CreateFormTemplate from "./FileFormTemplate.jsx";
import fire from "../../../configs/index.js";
import {createFileHandler} from "../../../redux/actions/index.jsx";
import {toast} from "react-toastify";
import {v4 as uuidV4} from "uuid"
import {compareTwoArrayOfString} from "../../../helper/index.js";




export const FileFormLogic = withFormik({
    mapPropsToValues:(props)=>{
        console.log("props",props)
        return {
            name:""
        }
    },
    handleSubmit:async (values, {props})=>{
        const isAlreadyExistFile = props?.userFiles?.find((file)=>file.name===values.name && compareTwoArrayOfString(props.currentRoute ,file.path ))
        const extension =values.name.includes(".") ? values.name.split(".")[values.name.split(".").length-1] : "txt";
        if (isAlreadyExistFile){
            toast.warning("this file Already Exist")
        }
        const data = {
            createdAt:new Date(),
            createdBy:props?.user?.displayName,
            updatedAt:new Date(),
            url:null,
            path:props.currentRoute,
            parent:props.currentFolder,
            extension,
            lastAccess: null,
            name:values.name,
            userId:props.user.uid,
            data:""
        }


        fire.firestore().collection("files").add(data).then(async (file)=>{
            const fileData = await (await file.get()).data()
           await props.dispatch(createFileHandler({...fileData , docId: file.id} ))
           await toast.success("create File Successful")
        }).catch((err)=>toast.error(`${err}`))


        // console.log("values",values)
        // const splitedName = values.name.split(".")
        // let extention =splitedName.length > 1  && splitedName[splitedName.length-1]!=="txt" ?  splitedName[splitedName.length-1] : "txt"
        // const data = {
        //     createdAt :new Date(),
        //     name:values.name,
        //     userId:props.user.uid,
        //     createdBy:props.user.displayName,
        //     path:props.currentFolder==="root" ? [] :[props.currentFolder],
        //     parent:props.currentFolder,
        //     lastAccess:null,
        //     updatedAt:new Date(),
        //     extention,
        //     url:null,
        //     data:""
        //
        //
        // }
        // fire.firestore().collection("files").add(data).then(async (file)=>{
        //     const fileData = await (await file.get()).data()
        //     const fileId = file.id
        //     toast.success("file is created")
        //     props.dispatch(addFile({data:fileData , docId:fileId}))
        // }).catch(e=>toast.error(`${e}`))

    },
    validationSchema:CreateFormSchema
})(CreateFormTemplate)


