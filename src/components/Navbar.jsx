import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-slate-800 text-white'>
        <div className="mycontainer  flex justify-between items-center px-4 py-5 h-14">

          <div className="logo font-bold text-white text-2xl">
            <span className='text-green-500'>&lt; </span>
            Pass
            <span className='text-green-500'>OP/&gt; </span>


          </div>
          {/* <ul>
            <li className='flex gap-4'>
              <a className='hover:font-bold' href="/">Home</a>
              <a className='hover:font-bold' href="/">About us</a>
              <a className='hover:font-bold' href="/">Service</a>
              <a className='hover:font-bold' href="/">Contact us</a>
            </li>
          </ul> */}
          <div>
            <button className='text-white my-4 rounded-md flex  justify-center items-center'>
              <img className="invert px-5 w-18" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" alt="github logo" />
              <span className='font-bold px-2 '>GitHub</span>

            </button>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
