import React from 'react';
import {withFormik} from "formik";
import LoginFormTemplate from "./LoginFormTemplate.jsx";
import {LoginSchema} from "../../../schemas/index.js";
import fire from "./../../../configs/index.js"
import {logInUser} from "../../../redux/actions/index.jsx";
import {toast} from "react-toastify";










export const LoginFormLogic = withFormik({
    mapPropsToValues:(props)=>{
        return {
            email:"",
            password:""
        }
    },
    handleSubmit:async (values, {props})=>{
        try {
            fire.auth().signInWithEmailAndPassword(values.email , values.password).then(user=>{
                fire.auth().currentUser.updateProfile({
                    displayName:values.name
                }).then(()=>{
                    const currentUser = fire.auth().currentUser
                    props.dispatch(logInUser({
                        uid:currentUser.uid,
                        name:currentUser.displayName,
                        email:currentUser.email
                    }))
                    props.navigate('/dashboard')
                }).catch((err)=>toast.error(`${err}`))
            }).catch((err)=>toast.error(`${err}`))
        }catch (e) {
           return  Promise.reject(e)
        }

    },
    validationSchema:LoginSchema
})(LoginFormTemplate)


