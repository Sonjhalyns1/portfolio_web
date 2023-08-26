import React from 'react'
import profilpic from "../assets/profile.jpeg"

const About = () => {
  return (
    <div name= 'about' className='w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center '>
        <section className=''>
        <h1 className='text-3xl text-center  font-bold mb-4'>
                <span>Ab</span>out <span>me</span>
            </h1>
            <div className= "flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto grid lg:grid-cols-2 md:grid-cols-2">
            
                <div className=''>
                    <img src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' alt='key' className='w-full rounded-2xl h-auto'/>
                </div>
                <div className='w-full  mb-12 md:mb-6 sm:mt-12'>
                <div className='text-lg ml-3'>
                    
                    <li>
                        
                        Hello, I'm Sonjhalyns Augustin and I'm a computer science student studying at Rutgers University.
                    </li>
                    <li>
                    My hunger for problem-solving and quick learning curve come in very helpful for my career in computer science.
                    </li>
                    <li>
                        I have a strong desire to grow my career, and to continuously learn about new tools, technologies, and languages.
                    </li>
                    <li>
                    Tennis is my jam when I'm playing with others because there's something about the game that fires up my strategic side and my competitive spirit to win against friends.    
                    </li>
                    <li>
                    Exploring new tools, technologies, and even AI tools like chatGPT intrigues me. The technological world is changing at a tremendous pace, and I'm here to ride the wave of development.
                    </li>
                    <li>
                    I'm all about being active as well. Whether I'm lifting weights or going on a hike with some friends, I feel that a healthy body fuels a focused mind.
                    </li>
                    <li>
                    One thing I've discovered is that balance is essential. I find that whether I'm coding or discovering nature's beauties, each feeds into the other, producing a harmonic combination.
                    </li>
                    <li>
                        more

                    </li>
                
                
                
            </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About