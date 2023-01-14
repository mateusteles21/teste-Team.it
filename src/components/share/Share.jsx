import React from 'react'
import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"

export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src="https://media.licdn.com/dms/image/C4D03AQHHS76B2Z1cmg/profile-displayphoto-shrink_800_800/0/1649684600496?e=1678924800&v=beta&t=11s7oybIrfw4gA73_JcPBki6m3c8-2LjkjdVANFao6E" alt="" />
            <input placeholder="What's in your mind Mateus?" className='shareInput'/>
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor='tomato' className='shareIcon'/>
                    <span className='shareOptionText'>Photo or video</span>
                </div>
            </div>
            <div className="shareOptions">
                <div className="shareOption">
                    <Label htmlColor='blue' className='shareIcon'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
            </div>
            <div className="shareOptions">
                <div className="shareOption">
                    <Room htmlColor='green' className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
            </div>
            <div className="shareOptions">
                <div className="shareOption">
                    <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
            </div>
            <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}
