import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/home')
        }
        else{
            navigate('/login')
        }
    },[])
    return (
        <div>
            <h1>Kuting</h1>
        </div>
    );
}

export default Auth;
