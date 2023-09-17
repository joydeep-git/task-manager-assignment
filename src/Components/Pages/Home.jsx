import React, { useState } from 'react';

import { useFirebaseContext } from '../../Context/FirebaseContext';

// COMPONENTS
import DisplayTasks from '../Helpers/DisplayTasks';
import AddTask from '../Helpers/AddTask';

const Home = () => {

    const { tasks } = useFirebaseContext();

    const [showModal, setShowModal] = useState(false);

    return (
        <div className='flex flex-col w-full h-full items-center justify-center'>

            <div className='mt-2'>
                <button
                    onClick={() => setShowModal(!showModal)}
                    className='flex flex-row items-center gap-2 p-2 bg-green-400 rounded hover:text-white w-15'>
                    ADD TASK +
                </button>
            </div>

            {
                showModal ? <AddTask /> : null
            }

            <div>
            </div>

        </div>
    );
}

export default Home;