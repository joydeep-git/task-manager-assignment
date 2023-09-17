import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import { useFirebaseContext } from '../../Context/FirebaseContext';

const Navbar = () => {

    const { authenticated, signOutUser, userEmail } = useFirebaseContext();

    const [dropDown, setDropDown] = useState(false);

    const handleUserSignOut = () => {
        setDropDown(false);
        signOutUser();
    }

    return (
        <>
            <div className='flex flex-row items-center justify-between px-8 py-2 bg-blue-500'>
                <Link to='/' className='text-white justify-self-center font-semibold hover:text-black cursor-pointer'>
                    Task Manager
                </Link>

                <div className='m-0 p-0 cursor-pointer'>
                    {
                        !authenticated
                            ? <Link to='/login' className='text-white hover:text-black'>Login</Link>
                            : <button
                                onClick={() => setDropDown(!dropDown)}
                                className='flex flex-row items-center justify-center gap-1 text-white hover:text-black' >
                                {userEmail !== null ? userEmail : "...fetching"}
                                <sub>{dropDown ? <AiFillCaretUp /> : <AiFillCaretDown />}</sub>
                            </button>
                    }
                </div>
            </div>

            <div className='relative'>
                {
                    dropDown
                        ? <div className='absolute right-3 top-0 gap-3 bg-white border border-black border-t-0 p-2  text-right'>
                            <Link
                                to='/changepassword'
                                onClick={ () => setDropDown(false)}
                                className='cursor-pointer hover:text-blue-600'>
                                change password
                            </Link>
                            <p
                                onClick={handleUserSignOut}
                                className='cursor-pointer hover:text-red-600'>Sign Out</p>
                        </div>
                        : null
                }
            </div>
        </>
    )
}

export default Navbar;