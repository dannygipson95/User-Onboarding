import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import UserForm from './components/Form'
import User from './components/User'
import formSchema from './validation/formSchema'
import {v4 as uuid} from 'uuid'

const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  tos: false
}
const initialDisabled = true

function App() {
  const [users, setUsers] = useState([])
  const [values, setValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  console.log(users)
 
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        setUsers(response.data.data)
          // console.log(users)
        })
      .catch(error =>{
        debugger
      })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(response=> {
      setUsers([response.data.data, ...users])
    })
    .catch(error => {
      debugger
    })
    .finally(() => {
      setValues(initialFormValues)
    })
  }

  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value
    
    setValues({
      ...values,
      [name]: value
    })
  }

  const onCheckboxChange = event => {
    const {name}= event.target
    const {checked}=event.target
    setValues({
      ...values,
      [name]: checked
    })
  }

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

  useEffect(() => {
    getUsers()
  },[])

  console.log(users)
  return (
    <div>
      <UserForm 
      values={values}
      onInputChange={onInputChange}
      onCheckboxChange={onCheckboxChange}
      onSubmit={onSubmit}
      />
      {users.map(user => {
        return (
        <User info={user} key={uuid()}/>
        )
      })
    }
    </div>
  );
}

export default App;
