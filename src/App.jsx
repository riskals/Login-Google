import { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import auth from './config'
import home from './home'
import NavbarComp from './components/NavbarComp'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const Navigate = useNavigate()
   async function Login() {
    const data = await signInWithPopup(auth, new GoogleAuthProvider())
    Navigate(`/home/${data.user.email}`)
  }


  return (
    <div className="App">
      <NavbarComp/>
      <h1><marquee>Aplikasi By Riska</marquee></h1>
      <button onClick={Login}>Login</button>
      
    </div>
  );
}

export default App
