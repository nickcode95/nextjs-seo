'use client'
import { React, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import hamburger from '../public/hamburger-white.webp'

export default function Header() {
    // This will toggle the navBar when the hamburger image is clicked
    const [nav, setNav] = useState(false)
    function toggleNav(e) {
        setNav(prevState => !prevState)
    }
    return (
        <div className="border-b-4 mb-8">
            {/* Mobile Nav */}
            <div className='ml-auto md:hidden relative '>
                <div className='flex justify-end'>
                    <button onClick={toggleNav}>
                        <Image src={hamburger} alt='hamburger nav' height={50} />
                    </button>
                </div>


                <nav className={`flex h-screen ${nav ? 'visible' : 'hidden'}`}>
                    <div className='m-auto'>
                        <div>
                            <Link onClick={toggleNav} href='/' className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-white mr-4 text-lg">Home</Link>
                            <Link onClick={toggleNav} href='services' className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-white mr-4 text-lg">Services</Link>
                            <Link onClick={toggleNav} href='about' className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-white mr-4 text-lg">About</Link>
                            <Link onClick={toggleNav} href='contact' className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-white mr-4 text-lg">Contact</Link>
                            <Link onClick={toggleNav} href='case-studies' className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-white mr-4 text-lg">Case Studies</Link>
                        </div>

                    </div>

                </nav>
            </div>


            {/* Desktop Nav */}
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6 sm:text-center">
                <Link href='/'>
                <h1 className='text-5xl font-bold text-center'>My Blog</h1>
                </Link>
              
                        
                </div>
                <div className='font-bold items-center pb-4 pt-8 text-lg'>
                <h3 className='md:hidden'>Sydney Website Development Agency</h3>
                </div>
                <div className="w-full hidden sm:block flex-grow lg:flex lg:items-center text-right sm:hidden">
                    <div className="text-sm lg:flex-grow text-lg">
                        <Link href='/' className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-white mr-4 text-lg">Home</Link>
                        <Link href='contact' className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-white mr-4 text-lg">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}