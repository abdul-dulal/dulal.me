"use client";
import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "@/app/assets/profileImage.jpg";
import Image from "next/image";
import Link from "next/link";
import TrueFocus from "./TrueFocus";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[5vw] 2xl:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse items-center justify-between md:flex-row">
        {/* Left Side */}
        <div className="mt-8 text-center md:w-1/2 md:text-left md:mt-0">
          {/* Greeting */}
          <h1 className="mb-2 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Abdul Dulal
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-2xl  md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight flex items-center flex-wrap justify-center">
            <span className="mr-4 text-3xl font-bold text-white sm:text-2xl">
              I am a{" "}
            </span>

            <TrueFocus
              sentence="Front-End Developer"
              manualMode={false}
              blurAmount={5}
              borderColor="white"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="mt-8 mb-10 text-base leading-relaxed text-gray-400 sm:text-lg md:text-lg">
            I am a Front-End Developer specializing in building modern,
            high-performance web applications using Next.js, React, Redux, and
            TypeScript. I focus on creating responsive, scalable, and
            user-friendly interfaces with clean architecture and maintainable
            code. With a strong understanding of component-based development,
            state management, and performance optimization, I enjoy turning
            complex requirements into intuitive digital experiences. I am
            passionate about continuous learning and staying up to date with
            modern front-end technologies and best practices.
          </p>
          {/* Resume Button */}
          <Link
            href="https://drive.google.com/file/d/1o0wPwcDfOLQndn4GJ9Vqcd4eNc29e0IY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 mt-5 text-lg font-bold text-white transition duration-300 transform rounded-full hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </Link>
        </div>
        {/* Right Side */}
        <div className="flex justify-center md:w-1/2 md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <Image
              src={profileImage}
              alt="Abdul dulal"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
