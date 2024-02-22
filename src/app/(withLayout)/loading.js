import React from 'react';

const LoadingPage = () => {
    return (
        <div>
            <button className="btn absolute top-1/2 left-1/2">
                <span className="loading text-3xl loading-spinner"></span>
                loading
            </button>
        </div>
    );
};

export default LoadingPage;