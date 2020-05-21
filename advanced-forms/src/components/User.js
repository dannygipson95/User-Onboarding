import React from 'react'
import {CardDiv} from './Styled'

function User(props){
    const {first_name, email} = props.info

    return(
        <CardDiv className='user'>
            <h2>{first_name}</h2>
            <h4>Email: {email}</h4>
        </CardDiv>
    )
}

export default User