import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ServiceContextProvider } from "./contexts/ServiceContext.jsx";
import { ProjectContextProvider } from "./contexts/projectContext.jsx";
import { CompletedProjectContextProvider } from "./contexts/completedProjectContext.jsx";
import { TestimonialContextProvider } from "./contexts/TestimonialContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ServiceContextProvider>
      <ProjectContextProvider>
        <CompletedProjectContextProvider>
          <TestimonialContextProvider>
            <App />
          </TestimonialContextProvider>
        </CompletedProjectContextProvider>
      </ProjectContextProvider>
    </ServiceContextProvider>
  </React.StrictMode>
);
