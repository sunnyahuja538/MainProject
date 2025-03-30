import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  //it prevents the form to reload on submission which is it default behaviour
  const submitHandler=(e)=>{
    e.preventDefault();
    setUserData({
      email,
      password
    })
    console.log(userData)
    //this will reset the email and password as we will submit
    setEmail('');
    setPassword('');  
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10 mt-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" />
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input required value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} className='bg-[#eeeeee] rounded mb-7 px-4 py-2 pb-2.5 border w-full text-lg placeholder:text-sm' type="email" placeholder='enter your email'>
          </input>
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input required value={password} onChange={(e)=>{
            setPassword(e.target.value);
          }} className='bg-[#eeeeee] rounded mb-7 px-4 py-2 pb-2.5 border w-full text-lg placeholder:text-sm' type="password" placeholder='password'></input>
          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
          <p className='text-center'>New Here?<Link to='/SignUp' className='text-blue-300'>Create New Account</Link></p>
        </form>
      </div>
      <div>
        <Link to='/captainLogin' className='block bg-green-600 text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base text-center'>Sign In As Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin