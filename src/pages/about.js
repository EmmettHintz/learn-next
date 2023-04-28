import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="w-fit h-16 text-primary text-center flex items-center text-2xl font-bold hover:text-primaryDark transition-all  duration-300 ">
          About Page
        </h1>
      </div>
      <div>
        <p className="flex w-72 text-dark bg-teal-400 translate-x-[300%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id a odit ad distinctio? Voluptatem, laudantium molestias? Laboriosam ea veniam ad, alias dolorem impedit obcaecati dolor iste aspernatur facere autem doloribus.</p>
      </div>
    </div>
  );
};

export default About;
