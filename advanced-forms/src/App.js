import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import UserForm from './components/Form'
import User from './components/User'
import formSchema from './validation/formSchema'
import Tos from './components/Tos'
import {v4 as uuid} from 'uuid'
import * as yup from 'yup'
import {FlexCenterDiv, StyledHr} from './components/Styled'
import {Route, Switch} from 'react-router-dom'

const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  tos: false
}

const initialFormErrors = {
  first_name: '',
  email: '',
  password: '',
  tos: '',
}
const initialDisabled = true

function App() {

  // setting state
  const [users, setUsers] = useState([])
  const [values, setValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
 
  // getting data from api
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        setUsers(response.data.data)
        })
      .catch(error =>{
        debugger
      })
  }

  // posting new user
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(response=> {
      setUsers([response.data, ...users])
      console.log(users)
    })
    .catch(error => {
      debugger
    })
    .finally(() => {
      setValues(initialFormValues)
    })
  
  }
  console.log(users)
  // adjusting values from form
  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        })
      })
    
    setValues({
      ...values,
      [name]: value
    })
  }

  // adjusting values from checkbox
  const onCheckboxChange = event => {
    const {name}= event.target
    const {checked}=event.target

    yup
    .reach(formSchema, name)
    .validate(checked)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(error => {
      setFormErrors({
        ...formErrors,
        [name]: error.errors[0]
      })
    })

    setValues({
      ...values,
      [name]: checked
    })
  }

  // submit function
  const onSubmit = event => {
    event.preventDefault()

    const newUser = {
      first_name: values.first_name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
      tos: values.tos
    }

    postNewUser(newUser)
  }

  //getting initial users
  useEffect(() => {
    getUsers()
  },[])

  useEffect(() => {
    formSchema.isValid(values)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [values])

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <UserForm 
          values={values}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          errors = {formErrors}
          disabled = {disabled}
          />
          <StyledHr/>
          <FlexCenterDiv>
            <h2>Current Users</h2>
          {users.map(user => {
            return (
            <User info={user} key={uuid()}/>
              )
            })
          }
          </FlexCenterDiv>
        </Route>

        <Route path='/tos'>
          <Tos/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
