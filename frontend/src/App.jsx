import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'
import Home from './Pages/Home/Home'
import SignUp from './Pages/SignUp/SignUp'
import LogIn from './Pages/LogIn/LogIn'

function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      console.log('hello world')
      navigate('/login');
    }else{
      console.log('bye')
    }
  },[])


  return (
    <>
     <Routes>
      
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>
     </Routes>
   
    </>
  )
}

export default App
