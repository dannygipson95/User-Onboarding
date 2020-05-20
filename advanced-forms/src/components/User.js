import React from 'react'

function User(props){
    const { email} = props.info
// first_name,
    return(
        <div>
            {/* <h2>{first_name}</h2> */}
            <h4>Email: {email}</h4>
        </div>
    )
}

export default User