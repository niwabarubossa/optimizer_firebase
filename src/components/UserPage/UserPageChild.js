import React from 'react';

const UserPageChild = ({props}) => {
  return (
    <div>
      {props.display_user_uid ?
      <div>
        <h1>{props.display_user_uid}</h1>
      </div>
      :
      <h1>noneneeeee</h1>
    }
    </div>
  )
}

export default UserPageChild