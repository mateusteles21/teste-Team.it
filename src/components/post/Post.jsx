import React, { useState } from 'react'
import "./post.css"
import {MoreVert} from "@mui/icons-material"
import {Users} from "../../dummyData"

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isliked, setIsLiked] = useState(false)

  const likeHandler =()=> {
    setLike(isliked ? like-1 : like+1)
    setIsLiked(!isliked)
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                
                <span className="postUsername">
                  {post.author}
                  </span>
                <span className="postDate">{post.publish_date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
          <h1>{post.title}</h1><br/>
          <p className="postText">{post.description}</p><br/>
          <div>{post.content}</div>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
            <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommenttext">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
