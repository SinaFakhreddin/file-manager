"use client"
import React from 'react';
import {Form} from "formik"
import InputForm from "./../../CustomInputWithFormik";
import {useSelector} from "react-redux";


const CreateFormTemplate = () => {

    return (
        <Form className="space-y-6">
            <div>
                <InputForm  name={"name"} label={"File Name"}  errorClassName={'text-red-500 text-xs'}/>
            </div>

            <div className={'flex flex-col gap-4'}>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Create Now !
                </button>
            </div>

        </Form>
    );
};

export default CreateFormTemplate;
