import React, { useState } from "react";

export const ProjectContext = React.createContext({
  Projects: [],
  setProjects: () => {},
});

export const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};
