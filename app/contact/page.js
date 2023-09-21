'use client'
import React, { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState('')
    // Update fName variable with text captured from field
    const [fullForm, setFullForm] = useState({
        fullName: '',
        email: '',
        company: '',
        message: '',
        number: ''
    });

    // Function to capture event from first name field
    function handleChange(e) {
        const { name, value } = e.target;
        setFullForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (fullForm.fullName && fullForm.email && fullForm.company && fullForm.number) {
            setForm({ state: 'loading' })
            try {
                const res = await fetch(`/api/nodemailer`, { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: (JSON.stringify(fullForm)),
                })

                const { error } = await res.json()

                if (error) {
                    setForm({
                        state: 'error',
                        message: error,
                    })
                    return
                }

                setForm({
                    state: 'success',
                    message: 'Your message was sent successfully.',
                })
                setFullForm({
                    fullName: '',
                    email: '',
                    message: '',
                    company: '',
                    number: ''
                })
            } catch (error) {
                setForm({
                    state: 'error',
                    message: 'Something went wrong',
                })
            }
        }
    };
    return (
        <div>
            <div className="flex justify-center">
                <h1 className='sub-title text-white text-7xl'>GET IN TOUCH</h1>
            </div>

            <section>
            
        <div>
            <section className="border-b-4 mb-4 px-12 text-white">
                <h1 className="text-3xl font-bold pb-4">Contact Us</h1>
            </section>
            <section>
                <div className="flex items-center justify-center p-12">

                    <div className="mx-auto w-full max-w-[550px]">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="mb-5">
                                <label
                                    className="mb-3 block text-base font-medium text-gray-300">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Full Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                    onChange={handleChange}
                                    value={fullForm.fullName}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="mb-3 block text-base font-medium text-gray-300"
                                >
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@domain.com"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                    onChange={handleChange}
                                    value={fullForm.email}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="subject"
                                    className="mb-3 block text-base font-medium text-gray-300"
                                >
                                    Company *
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    placeholder="Enter your Company Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                    onChange={handleChange}
                                    value={fullForm.company}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="phone"
                                    className="mb-3 block text-base font-medium text-gray-300"
                                >
                                    Phone Number *
                                </label>
                                <input
                                    type="text"
                                    name="number"
                                    id="number"
                                    placeholder="Enter your Phone Number"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                    onChange={handleChange}
                                    value={fullForm.number}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="message"
                                    className="mb-3 block text-base font-medium text-gray-300"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={handleChange}
                                    value={fullForm.message}
                                ></textarea>
                            </div>
                            <div className='text-center text-white'>
                            <button
                                className="hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none" type="submit"
                            >
                                Submit
                            </button>
                                {form.state === 'loading' ? (
                                    <div>Sending....</div>
                                ) : form.state === 'error' ? (
                                    <div>{form.message}</div>
                                ) : (
                                    form.state === 'success' && <div>Sent successfully</div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>


            </section>
        </div>
    )
}