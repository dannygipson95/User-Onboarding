import React from 'react'
import {FlexDiv, FieldDiv, HeaderDiv} from './Styled'
import {Link} from 'react-router-dom'

function UserForm(props){
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange
    } = props

    return(
        <form onSubmit={onSubmit}>
            <HeaderDiv>
            <h1>New User</h1>
                
                
                
                
            <FlexDiv>
                <FieldDiv>
                <label>Name: </label>
                <input
                    type='text'
                    name='first_name'
                    value= {values.first_name}
                    onChange= {onInputChange}
                />
                </FieldDiv>

                <div className='error'>{errors.first_name}</div>

                <FieldDiv>
                <label>Email: </label>
                
                <input
                    type='text'
                    name='email'
                    value={values.email}
                    onChange= {onInputChange}
                />
                </FieldDiv>

                <div className='error'>{errors.email}</div>

                <FieldDiv>
                <label>Password: </label>
                
                <input
                    type='text'
                    name='password'
                    value={values.password}
                    onChange= {onInputChange}
                />
                </FieldDiv>
                <div className='error'>{errors.password}</div>

                <label>
                    I have read and agree to <Link to={'/tos'}>Terms of Service</Link> 
                    <input
                    type='checkbox'
                    name='tos'
                    value=''
                    checked={values.tos}
                    onChange={onCheckboxChange}
                    />    
                </label>

                <div className='error'>{errors.tos}</div>

                <button disabled={disabled}>Submit</button>
                
            </FlexDiv>
            </HeaderDiv>
        </form>
    )
}

export default UserForm