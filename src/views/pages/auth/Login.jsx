import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { logInRequest, selectUser } from '../../../redux/slices/userSlice';

const Login = () =>{
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(logInRequest())
	},[])

	return(
		<>
		  <h1> Login </h1>
		</>
	)
}

export default Login