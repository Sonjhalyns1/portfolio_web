import React from 'react'

import Snapscape from '../assets/snapscape.png';
import Breastcancer from '../assets/breast_model.png';
import Shopcart from '../assets/shop_cart.png';

import Cryptosearch from '../assets/Cryptosearch.png'
import Facebook from '../assets/facebook.png'
import Portfolio from '../assets/portfolio.png'

const Work = () => {
  return (
    <div name='work' className='w-full sm:h-screen  text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>Take a look at the projects that i've worked on or currently working on.</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Snapscape})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                <ul className='text-center'>
                  Snapscape
                </ul>
                <ul className='text-sm italic text-center'>
                  Cryptosearch is a fully functional cryptocurrency website that utilizes React.js, Redux Toolkit.
                </ul>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://snapscape.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Sonjhalyns1/snapscape'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Cryptosearch})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                <ul className='text-center'>
                  Cryptosearch
                </ul>
                <ul className='text-sm italic text-center'>
                  Cryptosearch is a fully functional cryptocurrency website that utilizes React.js, Redux Toolkit.
                </ul>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://phenomenal-llama-a78e15.netlify.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Sonjhalyns1/Cryptosearch'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Breastcancer})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                <ul className='text-center'>
                  Breast Models
                </ul>
                <ul className='text-sm italic text-center'>
                  Cryptosearch is a fully functional cryptocurrency website that utilizes React.js, Redux Toolkit.
                </ul>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://sage-hummingbird-c45315.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Sonjhalyns1/breast-cancer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Shopcart})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                <ul className='text-center'>
                  Shopping cart
                </ul>
                <ul className='text-sm italic text-center'>
                  Cryptosearch is a fully functional cryptocurrency website that utilizes React.js, Redux Toolkit.
                </ul>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://agglomerative-begin.000webhostapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Sonjhalyns1/Shopping-cart'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Facebook})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center text-2xl font-bold text-white tracking-wider '>

              Facebook clone
              </span>
              
              <span className='text-center'>
              <ul>
                I’m currently working on building a fully functional Facebook clone that utilizes Node.js, Express, MongoDB, and React.js for a Backend and frontend.
              </ul>
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    N/A
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    N/A
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                My Portfolio Website
              </span>
              <span className='text-center'>
              <ul>
              Using React.js I built a fully responsive portfolio website that displays projects that I’ve worked on and projects that I am currently working on
              </ul>
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Sonjhalyns1/finalportfolio'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
            {/* Grid Item */}
          
          
        </div>
      </div>
    </div>
  )
}

export default Work