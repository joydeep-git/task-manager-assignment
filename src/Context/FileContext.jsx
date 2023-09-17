import React, { createContext, useContext, useState } from 'react';

const FileContext = createContext();
export const useFileContext = () => useContext(FileContext);

export const FileContextProvider = ({children}) => {

    return (
        <FileContext.Provider value={{
            tasks, setTasks, 
        }}>
            {children}
        </FileContext.Provider>
    )
}