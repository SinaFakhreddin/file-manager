import React, {useState} from 'react';

const TestFormUpload = () => {
    const [state, setState] = useState(null);
    return (
        <form
            onSubmit={(event)=>{
                event.preventDefault()
                // console.log("values",event.target.values)
            }}
            className={'my-4'}>
            <div className={'flex flex-col'}>
                <label className={'my-2 text-md font-semibold'}>File Name:</label>
                <input className={'border rounded'}  onChange={(e)=>console.log(e.target.files)} type="file" name={'File Name'}/>
            </div>

            <div>
                <button type={'submit'} className={'bg-blue-600 w-full rounded text-white mt-4 hover:bg-blue-700 py-2'}>Upload !</button>
            </div>

        </form>
    );
};

export default TestFormUpload;
