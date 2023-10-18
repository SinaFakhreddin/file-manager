"use client"

import React from 'react';
import {Field  , ErrorMessage} from "formik";
import {useDropzone} from "react-dropzone";



const InputForm = (props) => {
    const {getInputProps , getRootProps , isDragActive} = useDropzone({
        onDrop:(acceptedFiles =>props.handleChange(acceptedFiles)),
        noClick:true
    })


    console.log(props)

    return (
        <>
            {
                props.type!=="file" ?

                    <>
                        <label htmlFor={props?.name} className={`block text-sm font-medium  ${props?.labelClassName ? props?.labelClassName : "text-gray-700"}`}>
                            {props?.label}
                        </label>
                        <div className="mt-1">
                            <Field  id={props?.name} name={props?.name} type={props?.type} autoComplete={props?.autoComplete} required
                                     className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${props?.fieldClassName}`}/>
                            <ErrorMessage name={props?.name}  component={"div"} className={`${props?.errorClassName}`}/>
                        </div>
                    </> :
                    <div {...getRootProps({className:'dropzone'})} className="mt-1">
                        <Field onChange={(e)=>props.setFieldValue(e.target.files[0])} {...getInputProps}  id={props?.name} name={props?.name} type={props?.type} autoComplete={props?.autoComplete} required
                                 className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${props?.fieldClassName}`}/>
                        <ErrorMessage name={props?.name}  component={"div"} className={`${props?.errorClassName}`}/>
                    </div>

            }
        </>
    );
};

export default InputForm;
