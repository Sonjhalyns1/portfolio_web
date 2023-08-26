import React from 'react'

const Contact = () => {
  return (
    <div name= 'contact' className='w-full  bg-[#0a192f] flex justify-center items-center p-4 '>
        <form method= "post" action='https://getform.io/f/37d803df-0fb5-48aa-928a-c36ac9b38550' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                    Contact
                </p>
                <p className='text-gray-300 py-4'>Please feel free to contact me with any questions.</p>
            </div>
            <input className='bg-[#ccd6f6] rounded-md p-2' type="text" placeholder="   Name" name="name" />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder="Email" name="email" />
            <textarea className='bg-[#ccd6f6] p-2 rounded-md' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact