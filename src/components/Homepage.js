import React from "react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex pt-8 justify-center px-4">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-dark mb-8 text-center">
          Home Page
        </h1>
        <div className="bg-light shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-rose-50">
          <p className="text-dark">Work in progress at the moment, navigate to about page.</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
