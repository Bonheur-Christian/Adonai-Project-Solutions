import React, { useState } from "react";

export const CompletedProjectContext = React.createContext({
  completedProjects: [],
  setCompletedProjects: () => {},
});

export const CompletedProjectContextProvider = ({ children }) => {
  const [completedProjects, setCompletedProjects] = useState([]);

  return (
    <CompletedProjectContext.Provider value={{completedProjects, setCompletedProjects}}>
      {children}
    </CompletedProjectContext.Provider>
  );
};
