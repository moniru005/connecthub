import React from 'react';
import { IconBase } from 'react-icons';

const LeftSideBar = () => {

    const leftSideBarData = [
        {
            name: 'test1',
            icon: IconBase,
        }, 
        {
            name: 'test2',
            icon: IconBase,
        }, 
    ]



    return (
        <div>
            <h2>Left Side Bar</h2>
            {
                leftSideBarData.map(data=>{
                    console.log(data.name)
                })
            }
        </div>
    );
};

export default LeftSideBar;
