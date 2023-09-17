import React, { useEffect } from 'react';
import Authenticator from '../Helpers/Authenticator';
import { useFirebaseContext } from '../../Context/FirebaseContext';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();

    const { authenticated, createUserAccount } = useFirebaseContext();

    useEffect(() => {
        if (authenticated) {
            navigate("/");
        }
    }, [authenticated]);

    return (
        <div>
            <Authenticator title={"Sign Up"} action={createUserAccount} />
        </div>
    )
};

export default Registration;