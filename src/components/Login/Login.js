
import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handelEmailBlur=event=>{
        setEmail(event.target.value)
    }
    const handelPasswordBlur=event=>{
        setPassword(event.target.value)
    }
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname||"/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handelLogin=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password)
    }

    if(user){
        navigate(from,{replace:true});
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handelLogin}>
                    <div className="input-group">
                        <label>Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="" id="" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input onBlur={handelPasswordBlur} type="password" name="" id="" />
                    </div>
                    <div className="input-group">
                        <input type="submit" value="Log In" />
                    </div>
                </form>
                <div>
                    {
                        loading&&<p>Loading...</p>
                    }
                    <p>{error&& <> {error.message}</>}</p>
                    <p className='form-newaccount'>
                        New to ema-jon?<Link className='form-link' to="/singup">Create new account</Link>
                    </p>
                </div>
                <div className='line-container'>
                    <div className='first-line'></div>
                    <div className='line-text'> <small>or</small></div>
                    <div className='second-line'></div>

                </div>
                <div className='form-button'>
                    <button >Continue with google</button>
                </div>

            </div>

        </div>
    );
};

export default Login;