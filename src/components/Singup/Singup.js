import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from"../../firebase.init"
import'./Singup.css'

const Singup = () => {
    const[email,setEmail]=useState('')
    // console.log(email)
    const[password,setPassword]=useState('')
    const[confirmpassword,setConfirmpassword]=useState('')
    const[error,setError]=useState('')
    const[users,setUsers]=useState([]);
    console.log(users)
    const navigate=useNavigate()

    const handelEmailBlur=event=>{
        setEmail(event.target.value)
    }
    const handelPasswordBlur=event=>{
        setPassword(event.target.value)
    }
    const handelConfirmPassword=event=>{
        setConfirmpassword(event.target.value)
    }
     const[ createUserWithEmailAndPassword,user]= useCreateUserWithEmailAndPassword(auth);
     if(user){
         navigate('/shop');
         setUsers(user)
     }
    const handelCreatUser=event=>{
        event.preventDefault();
        if(password !==confirmpassword){
            setError('your given password not match')
            return;
        }
        if(password.length<6){
            setError('password mut be 6 charctors or longer')
            return;
        }
        createUserWithEmailAndPassword(email,password)

    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sing up</h1>
                <form onSubmit={handelCreatUser}>
                    <div className="input-group">
                        <label>Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="" id="" required/>
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input onBlur={handelPasswordBlur} type="password" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label>Confirm password</label>
                        <input onBlur={handelConfirmPassword} type="password" name="confirm-password" id="" required/>
                    </div>
                    <div className="input-group">
                       <input type="submit" value="Sing Up" />
                    </div>
                </form>
                <div>
                    <p style={{color:"red"}}>{error}</p>
                    <p className='form-newaccount'>
                        Already have an account!!<Link className='form-link' to="/login">Log in</Link>
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

export default Singup;