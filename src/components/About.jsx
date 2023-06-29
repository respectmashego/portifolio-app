import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a passionate software engineer who enjoys solving problems
          through coding. With a focus on modern technologies like React.js, I
          have developed numerous programs and web applications. My proficiency
          in React.js allows me to create dynamic and interactive user
          interfaces, constantly staying updated with industry standards.
        </p>
        <br />
        I excel in breaking down complex problems, developing scalable
        solutions, and optimizing performance. Collaborating effectively with
        teams, meeting deadlines, and contributing to an innovative environment
        are additional strengths. I am a continuous learner, eager to explore
        emerging technologies, and my diverse portfolio demonstrates my
        creativity, dedication, and problem-solving abilities. Let's connect and
        collaborate to create exceptional software solutions.
        <br />
      </div>
    </div>
  );
};

export default About;
