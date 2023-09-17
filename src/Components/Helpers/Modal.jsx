import React, { useState, useEffect } from 'react';

import { AiOutlineCloseCircle } from "react-icons/ai";

import { useFirebaseContext } from '../../Context/FirebaseContext';

const Modal = () => {

    const [taskData, setTaskData] = useState();

    const handleChange = (e) => {

        const { name, value } = e.target;

        setTaskData({
            ...taskData,
            [name]: value,
        });
    };
    useEffect(() => { console.log(taskData) }, [taskData])

    useEffect(() => {

        function autoExpandTextarea() {
            const textarea = document.getElementById('taskNotes');
            textarea.style.height = 'auto';

            textarea.style.height = (textarea.scrollHeight) + 'px';
        }

        const textarea = document.getElementById('taskNotes');
        textarea.addEventListener('input', autoExpandTextarea);

        return () => {
            textarea.removeEventListener('input', autoExpandTextarea);
        };
    }, []);

    return (
        <div
            className='flex flex-col border-2 border-black items-center justify-center gap-4 px-4 py-2 rounded absolute top-0 bottom-0 left-0 right-0 w-[80%] xl:w-[40%]   m-auto h-max bg-white '>

            <div
                className='flex flex-row justify-between items-center w-full'>

                <h2
                    className='text-black font-bold text-xl'>ADD TASK</h2>

                <AiOutlineCloseCircle
                    className='text-2xl text-[#ff0000] cursor-pointer hover:text-orange-500'
                    onClick={() => setModal(false)} />
            </div>

            <form
                className='flex flex-col gap-4 items-center w-full'>

                <div
                    className='flex flex-col flex-wrap gap-1 text-center w-full'>

                    <label htmlFor="taskTitle"
                        className='font-semibold'>Add Title</label>

                    <input
                        className='border-[1px] border-black w-full text-xs p-1 '
                        type="text"
                        name='taskTitle'
                        placeholder='Enter Title'
                        onChange={handleChange} />
                </div>

                <div className='flex flex-col flex-wrap gap-1 text-center w-full'>

                    <label
                        className='font-semibold'
                        htmlFor="taskNotes">Add Notes</label>

                    <textarea
                        className='border-[1px] resize-none border-black w-full text-xs p-1 overflow-hidden ' type="text"
                        name="taskNotes"
                        id='taskNotes'
                        placeholder='Enter Notes'
                        onChange={handleChange} />
                </div>

                <div className='flex flex-col flex-wrap gap-1 text-center w-full'>

                    <label
                        className='font-semibold'
                        htmlFor="taskDate">Enter Date</label>

                    <input
                        className='border-[1px] border-black w-full text-xs p-1 '
                        type="date"
                        name="taskDate"
                        onChange={handleChange} />
                </div>

                <div className='flex flex-col flex-wrap gap-1 text-center w-full'>

                    <label
                        className='font-semibold'
                        htmlFor="taskStatus">Task Status</label>

                    <select name="taskStatus"
                        className='border-[1px] border-black w-full text-xs p-1 '
                        onChange={handleChange}>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </select>

                </div>

                <div>
                    <button
                        className='px-2 py-1 border-black border rounded'
                        type='submit'>SUBMIT</button>
                </div>

            </form>

        </div >
    )
}

export default Modal;