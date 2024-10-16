import React, { useEffect } from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer/Footer';
import './Home.css'
import { useNavigate } from 'react-router-dom';


const Home = () => {
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

    <div>

      <Navbar/>

      <h1 className='tes'>Hello world</h1>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Footer/>
    </div>
  )
}

export default Home
