"use client"
import Link from 'next/link';
import React from 'react';

const error = () => {
    return (
        <div className='h-screen w-screen'>
            <h2 className='text-4xl text-center'>404 Error Page</h2>
            <Link href="/homeV2">
            <button className='btn btn-sm bg-[#69A2E9] text-white'>
                Go Home
            </button>
            </Link>
        </div>
    );
};

export default error;