import React from 'react';
import {withFormik} from "formik";
import { RegisterSchema} from "../../../schemas/index.js";
import RegisterFormTemplate from "./RegisterFormTemplate.jsx";
import fire from "../../../configs/index.js";
import {logInUser} from "../../../redux/actions/index.jsx";


export const RegisterFormLogic = withFormik({
    mapPropsToValues:(props)=>{
        return {
            email:"",
            password:"",
            name:"",
            confirmPassword:""
        }
    },
    handleSubmit:async (values, {setFieldError , props})=>{
        try {
          fire.auth().createUserWithEmailAndPassword(values.email , values.password).then(user=>{
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
              }).catch((err)=>console.log("err",err))
          }).catch(err=>console.log("err",err))


        }catch (e) {

            console.log(e)
        }

    },
    validationSchema:RegisterSchema
})(RegisterFormTemplate)


