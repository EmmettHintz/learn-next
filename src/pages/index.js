import React from 'react';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <div className="flex">
      <Navbar />
      <main className="ml-64 p-6">
      <h1 className="text-4xl font-semibold text-white hover:text-red-500 transition duration-300 hover:underline ">Welcome to my Music App</h1>
        {/* Your page content here */}
      </main>
    </div>
  );
};

export default Home;
