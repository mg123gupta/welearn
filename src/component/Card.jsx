import React from 'react'
import Data from '../component/CoursesCard'


const { data1,data2,data3,data4 } = Data;

export const Card = ({ data }) => {
	return (
		<div className=" w-full px-24 mt-10 ">
			<div className="w-full lg:w-1/5">
				<h2 className="text-2xl font-regular">{data.title}</h2>
				<h1 className="text-3xl my-6">{data.content}</h1>
				<p className="text-gray-600 pb-6">
					{data.para}</p>
			</div>
			{data.courses.map((items, index) => {
				return (
					<div className="w-full flex justify-evenly">
						<div className="w-1/2 flex rounded-xl shadow-2xl border border-gray-300 my-6">
							<div className="">
								<img src={items.url} alt="" className="rounded-t-xl" key={index} /> 
								<div className="p-5 flex justify-center items-center flex-col">
									<h3 className="text-4xl  font-regular text-gray-800 text-left">{items.title}</h3>
									<div className="text-left pl-2 text-gray-500 leading-8">
										<p>{items.content}</p>
									</div>
									<button className="bg-blue-600 text-white uppercase w-full text-center rounded-lg mt-4 py-2">start course</button>
								</div>
							</div>
						</div>
					</div>
				)
			})
			}
		</div>
	)
}
const Courses=()=>{
return(
	<div>
	<Card data={data1}/>
	<Card data={data2}/>
	<Card data={data3}/>
	<Card data={data4}/>
	</div>
)
}

export default Courses;
