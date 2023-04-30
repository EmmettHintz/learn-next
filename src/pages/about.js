import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex pt-8 justify-center px-4">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-dark mb-8 text-center">
          About Us
        </h1>
        <div className="bg-light shadow-lg rounded p-6 hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-rose-50">
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
        <div className="grid grid-cols-2 gap-x-6 pt-8 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/Emmett.jpg"
              alt="Emmett Hintz"
              width={250}
              height={250}
              className="rounded-3xl shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            />
          </div>
          <div className="bg-light shadow-lg rounded p-4 hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-rose-50">
            <h3 className="text-dark text-4xl font-bold">Emmett Hintz</h3>
            <p className="text-dark text-2xl underline">Front-End Specialist</p>
            <p className="text-dark text-xl ">
              Emmett is a sophomore at the Colgate University studying Computer
              Science and Economics. He is passionate about web design and
              creaing interactive and fun websites!
            </p>
          </div>
          <div className="bg-light shadow-lg rounded p-4 hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-rose-50">
            <h3 className="text-dark text-4xl font-bold">Mark Attar</h3>
            <p className="text-dark text-2xl underline">Product Manager</p>
            <p className="text-dark text-xl ">
              Mark is a sophomore at the Colgate University studying Computer
              Science. Filler here!
            </p>
          </div>
          <div className="flex justify-center pt-16">
            <Image
              src="/images/Mark.jpeg"
              alt="Mark Attar"
              width={250}
              height={250}
              className="rounded-3xl shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
