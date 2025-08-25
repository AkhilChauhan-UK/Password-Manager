import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-900 text-white flex flex-col justify-center items-center w-full'>
            <div className="logo font-bold text-red-500 text-2xl">
                <span className='text-green-500'>&lt; </span>
                Pass
                <span className='text-green-500'> OP/&gt; </span>


            </div>
            <div className='flex justify-center items-center'>
                Created with <img className="invert w-10 mx-2 " src="https://www.shutterstock.com/image-vector/dark-skull-logo-template-600nw-697009513.jpg" alt="" />ME

            </div>
        </div>
    )
}

export default Footer
