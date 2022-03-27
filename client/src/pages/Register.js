import {useState, useEffect} from 'react'
import {logo} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
  name:'',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values,setValues] = useState(initialState)
  // global state and useNavigate

  const handleChnge = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return <Wrapper className='full-page'>Register</Wrapper>
  
}
export default Register