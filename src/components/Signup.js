import env from "react-dotenv";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { signUpuser } from '../redux/reducer/authReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearState } from '../redux/reducer/authReducer'
import { FaGoogle } from "react-icons/fa6";


import "./Signup.css"

const Signup = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const { signuperror, signupsuccess } = useSelector(
        (state) => state.user
    )
    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, [dispatch]);


    useEffect(() => {
        // redirect user to login page if registration was successful
        if (signupsuccess) {
            if (signuperror === "emai exist") {
                dispatch(clearState())
                navigate('/signin')

            } else if (signuperror === "Password Mismatch") {
                dispatch(clearState())
                navigate('/signup')

            }
            else {
                dispatch(clearState())
                navigate('/signin')
            }
        }


    }, [navigate, signupsuccess, dispatch, signuperror])

    const authAuthenticate = (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            return;
        }

        dispatch(signUpuser({ name, email, password, confirmpassword }));
        setConfirmpassword("")
        setName("")
        setPassword("")
        setEmail("")

    }
    const handleSignin =async () => {
        window.open(
          
            `${process.env.REACT_APP_URL}/auth/google/callback`,
            "_self"
        )
    //  const res=  await axios.get("http://localhost:8000/auth/google/callback")
    //   console.log(res)       
            

    }

    return (

        <div className='main-w3layouts wrapper'>
 
            <h1>Creative SignUp Form</h1>
            <div className="main-agileinfo">
                <div className="agileits-top">
                    <form onSubmit={authAuthenticate}>
                        <input className="text" type="text" value={name} onChange={(e) => setName(e.target.value)} name="Username" placeholder="Username" required />
                        <input className="text email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required />
                        <input className="text" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" required />
                        <input className="text w3lpass" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} type="password" name="confirmpassword" placeholder="Confirm Password" required />

                        <input type="submit" value="SIGNUP" />
                    </form>
                    <span onClick={handleSignin}> <FaGoogle/>google Sign In</span>
                    <p>already have an Account? <Link to="/signin"> Login Now!</Link></p>
                </div>
            </div>
        </div>



    )
}

export default Signup