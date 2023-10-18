import * as Yup from "yup"
import {mixed, object, string} from "yup";



export const LoginSchema = Yup.object({
    email:string().required().email(),
    password:string().required().min(8)
})
export const CreateFormSchema = Yup.object({
    name:string().required().min(1).max(550)
})

export const RegisterSchema = Yup.object({
    name:string().required().min(3).max(6600),
    password:string().required().min(8),
    email:string().required().email(),
    confirmPassword: Yup.string().required()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export const UploadFileSchema = Yup.object({
    fileName:Yup.mixed().required("File Is Required.")
})