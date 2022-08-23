import React from 'react'
import profilpic from "../assets/profile.jpeg"

const About = () => {
  return (
    <div name= 'about' className='w-full sm:h-screen  bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1100px] w-full  grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                
                </div>
            </div>
             <div className='max-w-[1100px] w-full  max-h-[600px] h-full grid sm:grid-cols-2 gap-8 px-4'>
             <div
            style={{ backgroundImage: `url(${profilpic})` }}
            className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  max-w-[500px] max-h-[600px] box-content h-600 w-500 content-div'
          >
            </div>
                <div className='text-lg'>
                    
                        <li>
                            
                            Hello, I'm Sonjhalyns Augustin and I'm a computer science student studying at Rutgers University.
                        </li>
                        <li>
                           I am an excellent problem solver, and a fast learner which I believe are essential for pursuing a career in computer science.
                        </li>
                        <li>
                            I have a strong desire to grow my career, and to continuously learn about new tools, technologies, and languages.
                        </li>
                    
                    
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About