import React from 'react';

const LeftSideBarItem = ({ name, icon: Icon, link }) => {
    return (
        <li className='border-l-4 border-l-sky-600 pl-8 my-4 flex items-center'>
            <span className='mx-4'>
                <Icon size={20} />
            </span>
            {name}
        </li>
    );
};

export default LeftSideBarItem;
