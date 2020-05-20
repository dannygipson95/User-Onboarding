import React from 'react'

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
            <h1>New User</h1>
            <div className='inputs'>
                <label>Name: 
                    <input
                    type='text'
                    name='first_name'
                    value= {values.first_name}
                    onChange= {onInputChange}
                    />
                </label>

                <label>
                    Email: 
                    <input
                    type='text'
                    name='email'
                    value={values.email}
                    onChange= {onInputChange}
                    />
                </label>

                <label>
                    Password: 
                    <input
                    type='text'
                    name='password'
                    value={values.password}
                    onChange= {onInputChange}
                    />
                </label>

                <label>
                    Agree to Terms of Service 
                    <input
                    type='checkbox'
                    name='tos'
                    value=''
                    checked={values.tos}
                    onChange={onCheckboxChange}
                    />
                </label>

                <button>Submit</button>
            </div>
        </form>
    )
}

export default UserForm