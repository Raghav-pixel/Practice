import React from 'react'
import dogImage from './doggie_image.jpeg'

const CommentBox = ({ data }) => {
  return data.map((comment, idx) => (
    <div key={idx}>
        <div>
            <div style={{ display: 'flex' }}>
                <img width={"50px"} src={dogImage} alt="" />
                <p>{comment.name}</p>
            </div>
            <div>
                <p>{comment.comment}</p>
            </div>
        </div>
        <div style={{ paddingLeft: "20px", borderLeft: "1px solid black" }}>{comment.reply && <CommentBox data={comment.reply} />}</div>
    </div>
  ))
}

export default CommentBox