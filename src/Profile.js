import React, { useState } from 'react'

function Profile({userId}) {
    const [comment, setComment] = useState("");

  return (
    <>
        <input type="text" onChange={(e) => setComment(e.target.value)} />
        <div>{userId}</div>
        <div>{comment}</div>
    </>
  )
}

export default Profile