import React from 'react';
import login from '../images/login.png'
import { FaFacebook, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
	return (
		<div className="w-full h-full flex justify-center items-center py-10">
			<div className="w-4/5 flex justify-center items-center flex-col md:flex-row font-serif">
				<div className="w-1/2">
					<img src={login} alt="" className="w-full md:56" />
				</div>
				<div className="w-full sm:w-1/2 ">
					<h1 className="text-2xl sm:text-3xl sm:text-center font-regular pb-6">Welcome back to WeLearn</h1>
					<h2 className="text-sm font-regular text-center">Log in with:</h2>
					<div className="w-full flex justify-between py-6 text-xs sm:text-sm ">
						<div className="flex justify-evenly items-center border-2 rounded-md px-2   sm:w-1/3 py-1 mr-2 sm:mr-4">
							<FaFacebook className="" /><a href="#">Facebook</a>
						</div>
						<div className="flex justify-evenly items-center border-2 rounded-md  px-1 w-1/3 whitespace-nowrap mr-2 sm:mr-4"><FcGoogle /><a href="#">Google</a></div>
						<div className="flex justify-evenly items-center border-2 rounded-md w-1/3 "><FaApple /><a href="#">Apple</a></div>
					</div>
					<div className="flex  flex-row justify-center items-center">
						<hr className="w-40  -mt-2 text-gray-700 " />
						<p className=" px-4">or</p> <hr className="w-40 -mt-2" />
					</div>
					<h2 className="text-center w-full py-4 text-sm">Log in with your email address:</h2>
					<form action="" className="flex justify-center items-center flex-col">
						<input type="text " className="w-72 sm:w-64 lg:w-80 px-4 py-2 border-2 rounded-md outline-none focus-within:border-black" /><br />
						<input type="password" className="w-72 sm:w-64 lg:w-80 px-4 py-2  border-2 rounded-md outline-none  focus-within:border-black mb-4" /><br />
						<a href="#" className=" " style={{ color: "#228891" }}>forgot your password?</a><br />
						<div className="flex justify-center items-center">
							<input type="submit" value="log in" className="mt-4 rounded-md px-10 text-white px-4 py-1 shadow-xl capitalize" style={{ backgroundColor: "#228891" }} />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login;
