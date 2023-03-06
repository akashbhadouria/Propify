import React from 'react'
import usePath from '../utils/usePath';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className='bg-white border-b-4 shadow-sm hover:shadow-xl hover:cursor-grabbing sticky top-0 z-10'>
        <header className='flex justify-between items-center px-4 max-w-6xl mx-auto'>
            <div>
                <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsP_mTPZiVF0scnFSlmS2SqnXP5ZBBE8Sx6Fy3iECdqH2MF9jKJjGBK6SqkC8OxN3Rw&usqp=CAU" alt="Propify Logo" className='h-10 cursor-pointer m-2 mr-4' /></Link>
            </div>
            <div>
                <ul className='flex space-x-6 flex-wrap'>
                    <li className={`cursor-pointer text-sm font-semibold text-gray-500 border-b-2 py-3 ${usePath("/") && "text-black border-b-red-500"} `}><Link to="/">Home</Link></li>
                    <li className={`cursor-pointer text-sm font-semibold text-gray-500 border-b-2 py-3 ${usePath("/offers") && "text-black border-b-red-500"} `}><Link to="/offers">Offers</Link></li>
                    <li className={`cursor-pointer text-sm font-semibold text-gray-500 border-b-2 py-3 ${usePath("/sign-in") && "text-black border-b-red-500"}`}><Link to="/sign-in">Sign in</Link></li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header