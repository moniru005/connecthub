import React from 'react';
import { FaSignsPost } from "react-icons/fa6";
import LeftSideBarItem from './LeftSideBarItem';

const LeftSideBar = () => {

    const leftSideBarData = [
        { name: 'Feed', icon: FaSignsPost, link: 'link1' },
        { name: 'Videos', icon: FaSignsPost, link: 'link2' },
        { name: 'Settings', icon: FaSignsPost, link: 'link3' },
    ];



    return (
        <div>
            <ul>
                {
                    leftSideBarData.map((data, inx) => <LeftSideBarItem name={data.name} icon={data.icon} link={data.link} key={inx}></LeftSideBarItem>)
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;
