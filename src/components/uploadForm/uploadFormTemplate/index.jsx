import React, {useCallback} from 'react';
import {Form } from "formik"
import InputForm from "./../../CustomInputWithFormik";
import CircularLoading from "../../Loading/Loading.jsx";


const UploadFormTemplate = (props) => {
    console.log("FUCKINGPROPS",props.isSubmitting, props.progressUploadFile)


    return (
        <Form
            sub
            className="space-y-6">
            <div>
                <InputForm type={'file'}   name={"fileName"} label={"fileName"}  errorClassName={'text-red-500 text-xs'}/>

                { props.progressUploadFile?.showProgressBar &&
                    <div className={'px-[2px]'}>
                        <div className=" w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                            <div className="bg-green-600 h-1 rounded-full dark:bg-green-500" style={{width:`${props?.progressUploadFile?.progressPercent}%`}}></div>
                        </div>
                    </div>
                }

            </div>
            <div className={'flex flex-col '}>
                <button
                    type="submit"
                    className=" w-full relative flex items-center justify-center py-2  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {
                        props.isSubmitting ?
                            <CircularLoading/> : `Upload File !`
                    }
                </button>

            </div>
        </Form>
    );
};

export default UploadFormTemplate;
