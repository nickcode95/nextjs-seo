import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <section className='pb-12 border-b-4 pt-6 px-6 '>
                <div className='flex'>
                    <div className='font-bold  hidden md:block'>
                        <Link href='/'><p>Home</p></Link>
                        <Link href='/Contact'><p>Contact</p></Link>
                    </div>
                    <div className='sm:basis-2/3 md:flex-shrink-0 overflow-hidden md:mx-auto'>
                        <h3>Join our mailing list</h3>
                        <form>
                            <div className="flex border-b border-blue-500 py-2">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Name" aria-label="Full name"></input>
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none w-screen" type="text" placeholder="Your email" aria-label="Full name"></input>
                            </div>
                            <div className='md:mx-auto pt-4 pb-4'>
                                <button className=" mx-auto bg-blue-500 hover:bg-blue-700 border-blue-500 hover:blue-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                    Sign Up
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
                <div className='text-center'>
                    <h3>enterfooter</h3>
                </div>
            </section>
            <div className='text-center'>
                yourcompany
            </div>
        </div>
    )
}