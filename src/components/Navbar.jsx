import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo.jpg"
import {Link} from 'react-scroll'
import myResume from '../assets/myresume.pdf'
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}}></img>
        </div>
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li> <Link  to="home"  smooth={true}  duration={500}>
          <h4><span>Home</span></h4>
        </Link></li>
                <li><Link  to="about"  smooth={true}  duration={500}>
                <h4><span>About</span></h4>
        </Link></li>
                <li><Link  to="skills"  smooth={true}  duration={500}>
                <h4><span>Skills</span></h4>
        </Link></li>
                <li><Link  to="work"  smooth={true}  duration={500}>
                <h4><span>Projects</span></h4>
        </Link></li>
        <li><Link  to="contact"  smooth={true}  duration={500}>
        <h4><span>Contact</span></h4>
        </Link></li>
            </ul>
        </div>
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars />: <FaTimes />}
        </div>
        <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home"  smooth={true}  duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about"  smooth={true}  duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="skills"  smooth={true}  duration={500}>
                        skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link  onClick={handleClick} to="work"  smooth={true}  duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact"  smooth={true}  duration={500}>
                        Contact
                    </Link>
                </li>
        </ul>
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                
                
                <li className='w-[160px] h-[60px]   flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] ' >
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href='https:sonjhalynsaugustin@gmail.com'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px]   flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ' >
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href='https://github.com/Sonjhalyns1'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px]   flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0E76A8] ' >
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href='https://www.linkedin.com/in/sonjhalyns-augustin-312787249/'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar
