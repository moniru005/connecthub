"use client"
import Link from 'next/link';
import React from 'react';

const error = () => {
    return (
        <div>
            <h2 className='text-4xl'>404 Error Page</h2>
            <Link href="/home">
            <button className='btn btn-sm bg-[#69A2E9] text-white'>
                Go Home
            </button>
            </Link>
        </div>
    );
};

export default error;