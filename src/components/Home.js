import React, { useEffect } from 'react'
import { fetchUsers } from '../redux/reducer/authReducer';
import { useDispatch } from 'react-redux';


const Home = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
    dispatch(fetchUsers())
    },[dispatch])
  return (
    <div>Home</div>
  )
}

export default Home