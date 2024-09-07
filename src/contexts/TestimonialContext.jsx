import React, { useState } from "react";

export const TestimonialContext = React.createContext({
  testimonials: [],
  setTestimonials: () => {},
});

export const TestimonialContextProvider = ({children}) => {
  const [testimonials, setTestimonials] = useState([]);

  return (
    <TestimonialContext.Provider value={{ testimonials, setTestimonials }}>
      {children}
    </TestimonialContext.Provider>
  );
};
