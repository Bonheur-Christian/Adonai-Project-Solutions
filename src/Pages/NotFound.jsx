
import React from "react";

 function NotFound(){
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold"><span className="text-4xl font-extrabold">404</span> - Page Not Found</h1>
          <p className="px-1 text-xl">The page you are looking for does not exist.</p>
        <a href="/" className="px-32 text-blue-600 text-xl font-semibold italic hover:underline">Return to Home</a>
        </div>
    </div>
  );
};

export default NotFound;
