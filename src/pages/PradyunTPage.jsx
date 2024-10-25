import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaInstagram, FaLinkedin, FaGithubSquare, FaTree } from "react-icons/fa";

export default function DemoPage() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`h-screen w-screen bg-black`}>
      <div className="h-full w-full bg-black flex-col relative pt-10">
        {/* Header */}
        <div className="h-1/12 w-full font-monument text-white text-5xl flex-col items-center">
          <div className="flex items-center justify-center h-full ">
            <img src="/leftarrow.png" alt="left arrow" />
            <h1 className="pt-2 mx-8 animate-text gradient">Team Member Profile</h1>
            <img src="/rightarrow.png" alt="right arrow" />
          </div>
        </div>

        {/* Profile Section */}
        <div className="w-full h-3/6 flex flex-col items-center mt-4 pt-12">
          {/* Profile Picture */}
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQH156V3qNZ3Wg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709673303373?e=1735171200&v=beta&t=slV4nVpzXIH3_0x8pzmF6ezu69WIg3-NCk_Bycv3I6Q"
            alt="Profile Picture"
            className={`w-48 h-48 object-cover ${isHovered ? "scale-110" : "scale-100"} transition-transform duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />

          {/* Member Info */}
          <div className="text-center text-white mt-8">
            <h2 className="text-4xl font-bold">Pradyun Tandra</h2>
            <h3 className="text-xl mt-2">Developer (Team 🤫)</h3>
            <p className="mt-4 text-gray-400 max-w-md">
              Freshman Computer science student at Purdue University, from Texas. 1st year at Hack The Future.
            </p>
          </div>
          <Link
            to="/"
            className="z-10 mt-6 bg-htfgreen text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-green-700">
            Back to Home
          </Link>

          {/* Contact Links */}
          <div className="flex mt-8 gap-8 z-10">
            <a href="https://linktr.ee/pradyunt/" target="_blank" rel="noreferrer">
              <FaTree className="text-white text-4xl hover:animate-pop cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/pradyun-tandra/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-white text-4xl hover:animate-pop cursor-pointer" />
            </a>
            <a href="https://github.com/PradyunT" target="_blank" rel="noreferrer">
              <FaGithubSquare className="text-white text-4xl hover:animate-pop cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full flex gap-10 font-monument text-base bg-black text-white pt-20">
          <div className="flex-col px-8 pt-16">
            <h1 className="pb-4 text-htfgreen">CONTACT ME</h1>
            <h1>pradyun.tandra@gmail.com</h1>
            <div className="flex absolute z-10 text-4xl pt-4 gap-4">
              <a href="https://www.linkedin.com/in/pradyun-tandra/" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-white text-4xl hover:animate-pop cursor-pointer" />
              </a>
              <a href="https://github.com/PradyunT" target="_blank" rel="noreferrer">
                <FaGithubSquare className="text-white text-4xl hover:animate-pop cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="flex-col pt-16 w-1/2"></div>
          <div className="flex-col relative justify-right px-8 pt-16">
            <img src="/Logo.png" className="h-12 w-42 pl-32 mb-8 ml-40 object-end" alt="Logo" />
            <h1 className="text-right">Purdue University, West Lafayette, IN, 47906</h1>
          </div>
          <img className="absolute overflow-hidden bottom-0 z-0" src="/globe.png" alt="Globe Background" />
        </div>
      </div>
    </div>
  );
}
