import React from 'react';
import { Audio } from 'react-loader-spinner';


export const Loader = () => {
    return (

        <div className="flex justify-center items-center h-screen border border-red-200">
            <Audio className="bg-blue"
                height="80"
                width="80"
                radius="9"
                color="blue"
                ariaLabel="loading"
            />
        </div>


    )
}
