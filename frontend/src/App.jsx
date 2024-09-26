import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import SignUp from './Pages/SignUp/SignUp'
import LogIn from './Pages/LogIn/LogIn'

function App() {


  return (
    <>
     <Routes>
      
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>
     </Routes>
   
    </>
  )
}

export default App
