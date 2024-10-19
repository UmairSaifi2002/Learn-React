import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit= (e)=>{
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input 
            type="text" 
            placeholder='username'
            onChange={(e) => setUserName(e.target.value)}
            />
            {" "}
            <input 
            type="text" 
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default Login
