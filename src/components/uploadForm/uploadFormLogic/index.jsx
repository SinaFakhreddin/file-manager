import {withFormik} from "formik";
import UploadFormTemplate from "../uploadFormTemplate/index.jsx";
import fire from "../../../configs/index.js";
import {toast} from "react-toastify";
import {addFilesHandler, createFileHandler} from "../../../redux/actions/index.jsx";
import {UploadFileSchema} from "../../../schemas/index.js";



export const UploadFormLogic = withFormik({
    mapPropsToValues:(props)=>{
        console.log("props",props)
        return {
            fileName:null,
        }
    },

    handleSubmit:async (values, {props })=>{
        console.log("values",values)
        // const fileData = event?.target?.file?.files[0]
        // let extension = fileData.name.split(".")[fileData.name.split(".").length-1]
        // const uploadedFileData = {
        //     createdAt :new Date(),
        //         name:fileData.name,
        //         userId:props.user.uid,
        //         createdBy:props.user.displayName,
        //         path:props.currentFolder==="root" ? [] :[props.currentFolder],
        //         parent:props.currentFolder,
        //         lastAccess:null,
        //         updatedAt:new Date(),
        //          extension,
        //         url:null,
        //         data:""
        // }
        // const uploadFileLocation = fire.storage().ref(`files/uploaded_file/${props.user.uid}/${fileData.name}`)
        // const uploadTask = uploadFileLocation.put(fileData)
        // uploadTask.on(`state_changed` , function Progress(snapshot){
        //     const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100)
        //     if (progress==100){
        //         toast.success("upload success")
        //     }
        //
        // },
        //     error => {
        //         console.log(error)
        //     },
        //     async ()=>{
        //         const uploadedFileUrl = await uploadFileLocation.getDownloadURL()
        //         let newData = {
        //             ...uploadedFileData,
        //             url:uploadedFileUrl
        //         }
        //         fire.firestore().collection("files").add(newData).then(async (file)=>{
        //             const uploadedFileId = file.id
        //             await props.dispatch(createFileHandler({...newData ,docId: uploadedFileId}))
        //             toast.success("file Upload successful")
        //
        //         })
        //
        //     }
        //
        //
        // )


    },


    // validationSchema:UploadFileSchema
})(UploadFormTemplate)


