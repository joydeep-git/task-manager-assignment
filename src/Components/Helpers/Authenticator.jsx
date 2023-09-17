import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

const Authenticator = ({ title, action }) => {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [err, setErr] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setErr("");
        }, 2000);
    }, [err]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData({
            ...userData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = userData;

        const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === "") {
            setErr("Email field is empty")
        } else if (!re.test(email)) {
            setErr("Enter a valid email")
        } else if (password === "") {
            setErr("Password field is empty");
        } else if (password.length < 6) {
            setErr("Password must have 6 character")
        } else {
            setErr("");
            action(email, password);

            setUserData({
                email: "",
                password: "",
            })
        }
    }

    return (
        <div
            className='flex flex-col gap-3 justify-center items-center h-fit w-[40%] m-auto  p-4 drop-shadow-2xl shadow-black absolute top-0 bottom-0 left-0 right-0 bg-white
            rounded-xl lg:w-[75%]'>

            <div className='flex flex-col gap-2 w-full text-center'>
                <h2 className='text-2xl font-bold uppercase'>{title}</h2>
                <p className='text-red-500 h-3'>{err}</p>
            </div>

            <div className='flex flex-col gap-1  w-full'>
                <label htmlFor="email" className='text-xl'>Email</label>
                <input
                className='border border-black w-full text-sm p-1'
                    type="email"
                    name='email'
                    placeholder='Enter email'
                    value={userData.email}
                    onChange={handleChange} />
            </div>

            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="password" className='text-xl'>Password</label>
                <input
                className='border border-black w-full text-sm p-1'
                    type="password"
                    name="password"
                    placeholder='Enter password'
                    value={userData.password}
                    onChange={handleChange} />
            </div>

            <div className='w-full'>
                <button 
                className='bg-blue-500 text-white px-2 py-1 rounded-md'
                onClick={handleSubmit}>{
                    title === "Login" ? "Login" : "Register"
                }</button>
            </div>

            <div className='text-center'>
                <p className='text-lg'>
                    {title === "Login" ? "Need an account?" : "Have an account?"}
                </p>

                <Link to={title === "Login" ? '/registration' : '/login'} className='text-blue-500 ' >Click here</Link>
            </div>
        </div>
    )
}

export default Authenticator;