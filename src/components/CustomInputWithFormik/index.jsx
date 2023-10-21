import React from 'react';
import {Field  , ErrorMessage} from "formik";



const InputForm = (props) => {
    console.log("propsss",props)
    return (
        <>
                    <>
                        <label htmlFor={props?.name} className={`block text-sm font-medium  ${props?.labelClassName ? props?.labelClassName : "text-gray-700"}`}>
                            {props?.label}
                        </label>
                        <div className="mt-1">
                            <Field as={'input'} id={props?.name} name={props?.name} type={props?.type} autoComplete={props?.autoComplete} required
                                     className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${props?.fieldClassName}`}/>
                            <ErrorMessage name={props?.name}  component={"div"} className={`${props?.errorClassName}`}/>
                        </div>
                    </>
        </>
    );
};

export default InputForm;
