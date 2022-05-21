  import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import  { useState } from 'react';
import auth from '../../firebase.init';
  
  const GoogleAuthentication = () => {
      const[users,setUsers]=useState({});
      console.log(users);
      const googleProvider=new GoogleAuthProvider();
    const singupByGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user=result.user;
            setUsers(user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

      return [singupByGoogle]
  };
  
  export default GoogleAuthentication;