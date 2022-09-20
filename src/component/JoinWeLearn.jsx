import React from 'react'
import {TiSocialLinkedinCircular, TiSocialYoutubeCircular, TiSocialFacebookCircular} from 'react-icons/ti'
import {FaInstagram} from 'react-icons/fa'

const JoinWeLearn = () => {
	return (
		<div className="w-full flex justify-center items-center flex-col my-10 py-10" style={{backgroundColor:"#0a3d62"}}>
			<div className="sm:w-2/5 lg:w-1/2 px-6">
				<div className="text-center text-white mb-8">
				<h2 className="text-4xl font-semibold">Join WeLearn</h2>
				<p className="text-lg">Get in touch to discuss how WeLearn can best support your team</p>
				</div>
				<div className="capitalize">
					<input type="text" placeholder="Name" className="border-2 w-full pl-4 py-2 rounded-sm capitalize  outline-none focus-within:border-yellow-400 "/><br/><br/>
					<input type="email" placeholder="work email" className="border w-full pl-4 py-2 rounded-sm capitalize outline-none focus-within:border-yellow-400 "/><br/><br/>
					<input type="text" placeholder="organization name" className="border w-full pl-4 py-2 rounded-md capitalize outline-none focus-within:border-yellow-400 "/><br/><br/>
					<input type="text" placeholder="number of students" className="border w-full pl-4 py-2 rounded-sm capitalize focus-within:border-yellow-400  outline-none "/><br/><br/>
					<input type="text" placeholder="role" className="border w-full pl-4 py-2 rounded-sm capitalize focus-within:border-yellow-400  outline-none"/><br/><br/>
					<input type="tel" placeholder="Phone number" className="border w-full pl-4 py-2 rounded-sm capitalize focus-within:border-yellow-400  outline-none "/><br/><br/>
					<textarea name="message" id="" placeholder="message" cols="30"  className="border w-full pl-4 py-2 rounded-sm capitalize focus-within:border-yellow-400  outline-none row-span-3"></textarea><br/>
					<input type="submit" name="submit" className="w-full bg-yellow-400 text-white text-xl rounded-md py-1 my-5 outline-none "/>

				</div>
			</div>
		</div>
	)
}

export default JoinWeLearn;
