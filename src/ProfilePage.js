import React, { useEffect, useState } from 'react'
import Profile from './Profile';

function ProfilePage({userId}) {
    const [comment, setComment] = useState("");

    // useEffect(() => {
    //  setComment("");
    // }, [userId]);

  return (
    <>
      {/* <input type="text" onChange={(e) => setComment(e.target.value)} />
      <div>{userId}</div>
      <div>{comment}</div> */}

      <Profile key={userId} userId={userId} />
    </>
  )
}

export default ProfilePage