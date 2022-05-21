import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth);
    const[email,setEmail]=useState('')
    // console.log(email)
    const[name,setName]=useState('')
    const[address,setConfirmAddress]=useState('')
    const[error,setError]=useState('')
    const[users,setUsers]=useState([]);
    console.log(users)
    // const navigate=useNavigate()

    // const handelEmailBlur=event=>{
    //     setEmail(event.target.value)
    // }
    const handelName=event=>{
        setName(event.target.value)
    }
    const handelAddress=event=>{
        setConfirmAddress(event.target.value)
    }
    //  const[ createUserWithEmailAndPassword,user]= useCreateUserWithEmailAndPassword(auth);
    //  if(user){
    //      navigate('/shop');
    //      setUsers(user)
    //  }
    const handelCreatUser=event=>{
        event.preventDefault();
        const shippingDetailes={name,address};
        console.log(shippingDetailes)

    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shiping information</h1>
                <form onSubmit={handelCreatUser}>
                    <div className="input-group">
                        <label>Email</label>
                        <input value={user?.email}readOnly type="email" name="" id="" required/>
                    </div>
                    <div className="input-group">
                        <label>Name</label>
                        <input onBlur={handelName} type="text" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label>Address</label>
                        <input onBlur={handelAddress} type="text" name="address" id="" required/>
                    </div>
                    <div className="input-group">
                       <input type="submit" value="Add Shipping" />
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

export default Shipment;