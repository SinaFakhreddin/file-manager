import React from 'react';

const CircularLoading = () => {
    return (

                    <div className={'py-2'}>
                        <svg className="w-full h-full circular-loader" viewBox="25 25 50 50">
                            <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" strokeWidth="4"/>
                        </svg>
                    </div>

    );
};

export default CircularLoading;
