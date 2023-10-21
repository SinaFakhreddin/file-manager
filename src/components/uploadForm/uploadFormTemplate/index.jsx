import React, {useCallback} from 'react';
import {Form } from "formik"
import InputForm from "./../../CustomInputWithFormik";
import CircularLoading from "../../Loading/Loading.jsx";


const UploadFormTemplate = (props) => {

    return (
        <Form
            sub
            className="space-y-6">
            <div>
                <InputForm type={'file'} setFieldValue={props.setFieldValue}  name={"fileName"} label={"fileName"}  errorClassName={'text-red-500 text-xs'}/>
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
