import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import "./Tailwind/index.css";

import { FirebaseContextProvider } from './Context/FirebaseContext.jsx';

// import { FileContextProvider } from './Context/FileContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FileContextProvider> */}
    <FirebaseContextProvider>
      <App />
    </FirebaseContextProvider>
    {/* </FileContextProvider> */}
  </React.StrictMode>,
)