"use client"
import React from 'react';
import {Form} from "formik"
import InputForm from "./../../CustomInputWithFormik";
import {Link} from "react-router-dom";


const LoginFormTemplate = () => {

    return (
        <Form className="space-y-6">
            <div>
                <InputForm  name={"email"} label={"email"}  errorClassName={'text-red-500 text-xs'}/>
            </div>
            <div>
                <InputForm type={'password'} name={"password"} label={"password"}  errorClassName={'text-red-500 text-xs'}/>
            </div>

            <div className={'flex flex-col gap-4'}>
                <span className={'text-sm text-blue-800'}>
                    <Link to={'/register'}>
                        Not a Member ? Register Now
                    </Link>
                </span>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Login Now !
                </button>
            </div>

        </Form>
    );
};

export default LoginFormTemplate;
