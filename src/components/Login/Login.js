import React, { useRef } from 'react';
import './login.css'
import GaiLogo from "../imgs/GaiLogo.svg"


export default function Login() {
  const login = useRef()
  const password = useRef()


const hendleSubmit = () =>{
  if(login.current.value=='yhxxuz' && password.current.value=='7777'){
    localStorage.setItem('loginData','yhxxuz')
    localStorage.setItem('passwordData','7777')
  }
}

// state = {password:''}

  // hendleLogin = (e) =>{
  //   this.setState({login: e.target.value})
  // }

  // hendlePassword = (e) =>{
  //   this.setState({password: e.target.value})
  // }

    return (
      <div className='row'>
        <div className="col s6 loginImg">
          <img src={GaiLogo} className='gaiLogo' alt="GaiLogo" />
        </div>
        <div className="col s6 loginForm">
         <div className='formcontent'>
          <p className='formText'>Kirish uchun Login va Parol kiriting</p>
          <form onClick={hendleSubmit}>
            <input
              placeholder='Login'
              type='text'
              name='Login'
              ref={login}
              />
            <input
              placeholder='Password'
              type='password'
              name='Password'
              ref={password}
               />
            <button className="btn cyan lighten-2 waves-effect waves-purple loginBtn" >Send</button>
          </form>
         </div>
        </div>
      </div>
    )
  }
