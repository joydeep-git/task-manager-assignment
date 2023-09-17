import React, { useState } from 'react';

const AddTask = () => {

    const [error, setError] = useState(null);

    return (
        <form className='w'>
            <div>
                <p>Add Task</p>
                <button onClick={() => display(false)}>Close</button>
            </div>

            <p>{error !== null ? error : null}</p>

            <div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' placeholder='Enter Title' />
                </div>

                <div>
                    <label htmlFor="body">Details</label>
                    <input type="text" name='body' placeholder='Enter Details' />
                </div>
            </div>

            <div>
                <input type="date" />
                <select >
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </form>
    )
}

export default AddTask;