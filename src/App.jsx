import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen w-full bg-red-200">
      <Navbar />
      <h1 className="text-center py-10 relative group cursor-pointer">
        sagar
        <div
          className="h-2 w-full bg-red-600 absolute left-1/2 bottom-0 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"
        ></div>
      </h1>
    </div>
  );
}

export default App;