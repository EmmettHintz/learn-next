import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex pt-8 justify-center px-4">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-dark mb-8 text-center">
          About Us
        </h1>
        <div className="bg-light shadow-lg rounded p-6">
          <p className="text-dark text-lg">
            Welcome! We are a dedicated team of students driven by our passion
            for creating groundbreaking solutions tailored to our customers'
            unique needs. Our mission is to exceed expectations by delivering
            the finest customized products while upholding the highest standards
            of professionalism. Continuously evolving and growing, we are guided
            by our core values of integrity, innovation, and excellence. We are
            grateful for your interest in our company and eagerly anticipate the
            opportunity to collaborate and create a lasting partnership.
          </p>
        </div>
        <h2 className="text-center text-dark text-3xl font-bold pt-16 ">
          Meet Our Team
        </h2>
      </div>
    </div>
  );
};

export default About;
