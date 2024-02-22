import React from 'react';

const Loader = () => {
    return (
        <div>
            <button className="btn text-2xl text-[#3E70B3] h-screen w-screen ">
                <span className="loading  loading-spinner"></span>
                loading
            </button>
        </div>
    );
};

export default Loader;