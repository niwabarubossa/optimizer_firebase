import React from 'react';

const UserPageChild = ({props}) => {
  return (
    <div>
      {props.display_user_uid ?
      <div> 
        this is a user_id from firestore
        my display user_id = <h1>{props.display_user_uid}</h1>
      </div>
      :
      <h1>noneneeeee</h1>
    }
    </div>
  )
}

export default UserPageChild