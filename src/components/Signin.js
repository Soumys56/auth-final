import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { siginclearSate } from '../redux/reducer/authReducer'
import { signInuser } from '../redux/reducer/authReducer'
import "./Signup.css"
const Signin = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {signinerror,signinsuccess } = useSelector(
        (state) => state.user
    )

    useEffect(() => {
        return () => {
            dispatch(siginclearSate());
        };
    }, [dispatch]);

    useEffect(() => {
        // redirect user to login page if registration was successful
        if (signinsuccess) {
            if (signinerror === "success") {
                dispatch(siginclearSate())
                navigate('/home')
                
            } 
            else {
                dispatch(siginclearSate())
                navigate('/signin')
            }
        }


    }, [navigate, signinsuccess, dispatch, signinerror])

    const authAuthenticate=(e)=>{
        e.preventDefault();
       

        dispatch(signInuser({ email, password }));
     
        setPassword("")
        setEmail("")

    }

  return (
    <div className='main-w3layouts wrapper'>
           
    <h1>Creative SignIn Form</h1>
    <div className="main-agileinfo">
        <div className="agileits-top">
            <form onSubmit={authAuthenticate}>
              
                <input className="text email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required />
                <input className="text" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" required />
               

                <input type="submit" value="SIGNIN" />
            </form>
            <p>Don't have an Account? <Link to="/"> SignUp</Link></p>
        </div>
    </div>
</div>


  )
}

export default Signin