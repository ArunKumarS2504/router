import React, { createContext,useState } from 'react';



const Context = React.createContext();

export const MyProvider = ({ children }) => {
    const [inputVal, setInputVal] = useState('');
  
    return (
      <Context.Provider value={{ inputVal, setInputVal }}>
        {children}
      </Context.Provider>
    );
  };
export default Context;