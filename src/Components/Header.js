import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-20 bg-slate-300 py-3'>
      <div>
        <h1 className='text-xl'><span className='text-red-600'>GithubUser</span>  Data Fetch</h1>
      </div>
      <div className='w-full md:w-2/6'>
        <ul className='flex justify-around md:justify-end'>
          <li className='px-2'>Home</li>
          <li className='px-2'>About</li>
        </ul>
      </div>
    </div>

  )
}

export default Header