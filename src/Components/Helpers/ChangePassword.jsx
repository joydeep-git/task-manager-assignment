import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFirebaseContext } from '../../Context/FirebaseContext';

const ChangePassword = () => {

    const navigate = useNavigate();

    const { authenticated, updateAccountPassword } = useFirebaseContext();

    const [password, setPassword] = useState({
        current: "",
        new: "",
        confirm: "",
    })

    const [showAlert, setShowAlert] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(null);
        }, 2000);
    }, [showAlert]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setPassword({
            ...password,
            [name]: value,
        })
    }

    const handlePasswordUpdate = (e) => {
        e.preventDefault();

        if (password.new.length < 6) {
            setShowAlert("Password must have 6 characters")
        } else if (password.new !== password.confirm) {
            setShowAlert("Confirm password is not same")
        } else {
            updateAccountPassword(password.current, password.confirm);
            setPassword({
                current: "",
                new: "",
                confirm: "",
            })
        }
    }

    useEffect(() => {
        if (!authenticated) {
            navigate("/login");
        }
        return;
    }, [authenticated]);

    return (
        <div className='flex flex-col gap-3 justify-center items-center h-fit w-[40%] m-auto  p-4 drop-shadow-2xl shadow-black absolute top-0 bottom-0 left-0 right-0 bg-white
        rounded-xl lg:w-[75%] '>
            <div className='flex flex-col text-center'>
                <p className='text-xl font-bold uppercas'>Change Password</p>
                <p className='h-2 text-red-600' >{showAlert}</p>
            </div>

            <div className='flex flex-col text-left w-full gap-2'>
                <label htmlFor="current">Current Password</label>
                <input
                    className='border p-0.5 border-black'
                    onChange={handleChange}
                    type="password"
                    name="current"
                    placeholder='Enter Current Password'
                    value={password.current} />
            </div>

            <div className='flex flex-col w-full gap-2'>
                <label htmlFor="new">New Password</label>
                <input
                    className='border p-0.5 border-black'
                    onChange={handleChange}
                    type="password"
                    name="new"
                    placeholder='Enter New Password'
                    value={password.new} />
            </div>

            <div className='flex flex-col w-full gap-2'>
                <label htmlFor="confirm">Confirm New Password</label>
                <input
                    className='border p-0.5 border-black'
                    onChange={handleChange}
                    type="password"
                    name="confirm"
                    placeholder='Confirm New Password'
                    value={password.confirm} />
            </div>

            <button
                className='py-1 px-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600'
                onClick={handlePasswordUpdate}>Change Password</button>
        </div>
    )
}

export default ChangePassword;