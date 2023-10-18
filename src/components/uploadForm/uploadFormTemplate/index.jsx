import React, {useCallback} from 'react';
import {Form } from "formik"
import InputForm from "./../../CustomInputWithFormik";
import CircularLoading from "../../Loading/Loading.jsx";
import {RiDragDropLine} from "react-icons/ri"
import MyDropZone from "../../MyDropZone/index.jsx";


const UploadFormTemplate = (props) => {

    console.log("props",props)

    return (
        <Form
            sub
            className="space-y-6">
            <div>
                <InputForm setFieldValue={props.handleChange} handleChange={props.handleChange} type={'file'}  name={"fileName"} label={"fileName"}  errorClassName={'text-red-500 text-xs'}/>
                {/*<MyDropZone setFieldValue={props.setFieldValue}/>*/}
            </div>
            {/*<div className={'border border-2 border-dashed rounded py-6 flex flex-col items-center justify-center text-gray-400'}>*/}
            {/*    <span>Drag And Drop Zone... !</span>*/}
            {/*    <RiDragDropLine size={25}/>*/}
            {/*</div>*/}

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
