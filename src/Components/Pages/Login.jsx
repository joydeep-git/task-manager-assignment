import React, { useEffect } from 'react';
import Authenticator from '../Helpers/Authenticator';
import { useNavigate } from 'react-router-dom';

import { useFirebaseContext } from '../../Context/FirebaseContext';

const Login = () => {
    const navigate = useNavigate();

    const { authenticated, loginUserAccount } = useFirebaseContext();

    useEffect(() => {
        if (authenticated) {
            navigate("/");
        }
    }, [authenticated]);

    return (
        <div className=''>
            <Authenticator title={"Login"} action={loginUserAccount} />
        </div>
    )
};

export default Login;