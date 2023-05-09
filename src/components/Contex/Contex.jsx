import React, { createContext, useContext, useState } from 'react';

// Context yaratish
const DataContext = createContext();

// ContextProvider komponenti yaratish
function DataContextProvider(props) {
  const [data, setData] = useState([]);
  const updateData = newData => setData(newData);

  // Context o'zgaruvchilari
  const contextValue = {
    data,
    updateData,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };
