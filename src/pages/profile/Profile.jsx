import React from 'react'
import "./profile.css"
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profilerightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src="assets/post/3.jpg" alt="" />
                            <img className='profileUserImg' src="https://media.licdn.com/dms/image/C4D03AQHHS76B2Z1cmg/profile-displayphoto-shrink_800_800/0/1649684600496?e=1678924800&v=beta&t=11s7oybIrfw4gA73_JcPBki6m3c8-2LjkjdVANFao6E" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Mateus Teles</h4>
                            <span className='profileInfoDesc'>Hello my friends</span>
                        </div>
                    </div>
                    <div className="profilerightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
