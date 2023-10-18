import React from 'react';
import {RegisterFormLogic} from "./RegisterForm/RegisterFormLogic.jsx";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"

const LoginComponent = () => {
    const dispatch  = useDispatch()
    const navigate = useNavigate()
    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Login on File Manager System</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <RegisterFormLogic dispatch={dispatch} navigate={navigate}/>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
