import react from "react";
import man from "../images/man.jpg";
import group from "../images/header-image.jpeg";
const Fororganization = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full relative">
        <div className="w-full ">
          <img src={group} alt="" className="w-full" />
        </div>
        <div className=" w-full flex justify-center items-center absolute top-0 bottom-0">
          <div className="w-1/2 sm:w-1/2 flex justify-center items-center p-10 flex-col bg-white">
            <h1 className="text-2xl font-semibold pb-6">
              Unlock your company's global potential
            </h1>
            <p>
              WeLearn equips your team with the real-world English skills to
              succeed anywhere through specialized private English tutoring from
              any device.
            </p>
            <button className="w-56 capitalize border mt-5 py-4 text-white font-bold text-lg bg-yellow-400 rounded-md">
              get quote
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-col ">
        {/* <div className="w-full px-8 sm:px-20 py-10 flex justify-center items-center   flex-col md:flex-row-reverse">
					<div className="w-full md:1/2  lg:w-3/5">
						<img src={man} alt="man" className="w-full" />
					</div>
					<div className="w-full md:1/2 lg:w-1/4">
						<h1 className="py-10 text-4xl sm:text-5xl font-medium">Why WeLearn?</h1>
						<p className="text-xl sm:text-2xl">WeLearn gives instant access to private lessons with hundreds of patient, professional native English speaking tutors from the UK, US, Australia, Canada and</p>
					</div>
				</div> */}
        {/* personalized learning */}

        {/* <div className="w-full sm:flex justify-center items-start mt-10 mb-5 py-5 bg-yellow-400 h-1/2 px-10">
					<div className="w-full sm:w-1/2 h-full mr-12">
						<img className="h-1/2 item-content-box item-block image" data-at="image" alt="" src="//v.fastcdn.co/u/83964589/50997513-0-shadow.png" data-src="//v.fastcdn.co/u/83964589/50997513-0-shadow.png" data-retina-src="//v.fastcdn.co/u/83964589/50997513-0-shadow.png" srcset="//v.fastcdn.co/u/83964589/50997513-0-shadow.png 2x" />


					</div>
					<div className="w-full sm:w-1/5 ml-8 sm:ml-0 sm:mt-20">
						<h5 className="text-xs text-blue-900">

							ONLY WITH WeLearn</h5>
						<h2 className="text-2xl sm:text-4xl font-semibold text-white mt-5">Personalized Learning</h2>
					</div>
				</div> */}
      </div>

      {/* zig-zag page */}
      <div className="px-20 sm:px-40  w-full sm:flex justify-center items-center flex-col mb-20">
        <div>
          <div className="w-full sm:w-1/2 float-right mt-10 mb-20">
            Choose tutors from your professional field. WeLearn offers a wide
            variety of professionals from different backgrounds.
            <br />
            <button>get quote</button>
          </div>
          <div className="sm:flex items-start justify-center w-full mb-12 ">
            <section className="w-full sm:w-1/2">
              <h2 className="font-semibold text-2xl text-gray-700 my-5">
                Lessons for any schedule
              </h2>
              <p>
                Students can book ahead of time with their favorite tutors or
                call on-demand from anywhere, from any device.
              </p>
            </section>
            <img
              src="//v.fastcdn.co/u/83964589/49662800-0-shutterstock-1130198.jpg"
              alt=""
              className=" w-full sm:w-1/2 ml-10"
            />
          </div>
          <div className="sm:flex items-start justify-around w-full mb-12">
            <img
              src="//v.fastcdn.co/u/83964589/49662750-0-shutterstock-6057288.jpg"
              alt=""
              className="w-full sm:w-1/2"
            />
            <section className="w-full sm:w-1/2 ml-10">
              <h2 className="font-semibold text-2xl text-gray-700 my-5">
                Private Tutoring
              </h2>
              <p>
                Every student can focus on their individual needs and goals in
                1-on-1 classes.
              </p>
            </section>
          </div>
          <div className="sm:flex items-start justify-center w-full mb-12">
            <section className="w-full sm:w-1/2">
              <h2 className="font-semibold text-2xl text-gray-700 my-5">
                English for the real world
              </h2>
              <p>
                Students build skills and confidence to navigate real world
                situations with ease through our conversation based methodology.
              </p>
            </section>
            <img src="" alt="" className="w-full sm:w-1/2" />
          </div>
          <div>
            <div>
              <img src="" alt="" className="w-full sm:w-1/2" />
            </div>
            <div className="w-full sm:w-1/2">
              <h2 className="font-semibold text-2xl text-gray-700 my-5">
                Specialized Curriculum
              </h2>
              <p>
                Full access to a library of guided curriculum designed for
                learners of every level.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-2/5 relative bg-blue-500 flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="bg-cover w-full abso;ute"
        />
        <div className=" absolute w-2/5 flex justify-center items-center ">
          <div className="flex justify-center items-center flex-col ">
            <h2 className="sm:text-3xl mb-7  font-semibold hidden sm:flex text-center bg-black bg-opacity-30 py-5 px-10">
              Empower your global team today
            </h2>
            <button className=" text-white bg-yellow-500 capitalize px-8 sm:px-10  py-2 rounded-md whitespace-nowrap">
              get quote
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full  sm:flex justify-center items-center flex-col mt-10 px-5 py-10">
          <div className="px-5 sm:flex justify-center items-center flex-col sm:text-center">
            <h6 className="text-xs text-blue-600 font-semibold">
              MORE THAN ENGLISH
            </h6>
            <h1 className="sm:w-4/5 text-2xl sm:text-4xl font-semibold mb-5 mt-3">
              Excel in multi-cultural business
            </h1>
            <p className="sm:w-3/5">
              On WeLearn, students learn more than English - they develop the
              communication skills to stand out in their field.
            </p>
          </div>
          <div className="sm:flex justify-around text-xs text-gray-600 sm:text-center w-full sm:w-4/5 lg:w-1/2  mt-7">
            <div className="sm:w-4/12  mr-5 h-60 mb-5  overflow-hidden rounded-lg relative">
              <p className="mb-5">
                Improve your public speaking and presentation skills with a
                marketing consultant from Toronto.
              </p>
              <img
                src="//v.fastcdn.co/u/83964589/49664885-0-shutterstock-1294204.jpg"
                alt=""
                className="h-full w-full rounded-lg"
              />
              <div
                className="flex justify-between items-center absolute z-2 bottom-0 h-10 right-0 left-0 text-left pl-2 text-black font-semibold"
                style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
              >
                <div>
                  <h2>Robert J. W.</h2>
                  <span>Marketing Consultant</span>
                </div>
                <img
                  src="//v.fastcdn.co/u/83964589/51326391-0-canada.png"
                  alt=""
                  className="w-7 h-5"
                />
              </div>
            </div>
            <div className="sm:w-4/12 mr-5 mb-5 overflow-hidden rounded-lg relative">
              <p className="mb-5">
                Build listening comprehension and aviation vocabulary hearing
                the adventures of an international pilot.
              </p>
              <img
                src="//v.fastcdn.co/u/83964589/49663715-0-shutterstock-1282520.jpg"
                alt=""
                className="rounded-lg h-full "
              />
              <div
                className="flex justify-between items-center absolute z-2 bottom-0 h-10 right-0 left-0 text-left pl-2 text-black font-semibold"
                style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
              >
                <div>
                  <h2>Rebecca C</h2>
                  <span>Professional Pilot</span>
                </div>
                <img
                  src="//v.fastcdn.co/u/83964589/51326397-0-england.jpg"
                  alt=""
                  className="w-7 h-5"
                />
              </div>
            </div>
            <div className="sm:w-4/12 h-60 overflow-hidden rounded-lg relative">
              <p className="mb-1">
                Practice speaking while discussing the latest technologies with
                a software engineer working in San Francisco.
              </p>
              <img
                src="//v.fastcdn.co/u/83964589/49662780-0-shutterstock-1322095.jpg"
                alt=""
                className="rounded-lg h-full w-full"
              />
              <div
                className="flex justify-between items-center absolute z-2 bottom-0 h-10 right-0 left-0 text-left pl-2 text-black font-semibold"
                style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
              >
                <div>
                  <h2>Michael M</h2>
                  <span>Software Engineer</span>
                </div>
                <img
                  src="//v.fastcdn.co/u/83964589/51326403-0-USA.jpg"
                  alt=""
                  className="w-7 h-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fororganization;
