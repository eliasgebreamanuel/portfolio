import "./App.css";
import Profile from "./assets/Photo.png";
import ProfileTwo from "./assets/Elias_Gebreamanuel_Hailu.png";

import { useEffect, useState } from "react";
import Project1 from "./assets/project1.png";
import Ecommerce from "./assets/ecommerce.png";
import Menaheriya from "./assets/menaheriya.png";
import WebClassify from "./assets/webclassify.png";
import Mern from "./assets/mern.png";
import Flutter from "./assets/flutter.png";
import Next from "./assets/next.png";

import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Appp from "./assets/app4.png";

import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  const borderRadiusValue = 200;

  return (
    <div className="max-w-4xl m-auto relative">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        }  fixed left-0 right-0 top-0 z-20`}
        id="home"
      >
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Elias G/Amanuel Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutme"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28 sm:mt-40">
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Elias,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">
                  Software Developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  I'm a highly motivated full-stack software developer with
                  expertise in website development, mobile application
                  development, software engineering, machine learning, and deep
                  learning. I'm enthusiastic about collaborating with
                  individuals and teams to create transformative software
                  solutions. With my adaptability, problem-solving skills, and
                  commitment to excellence, I bring a valuable asset to any
                  project. I thrive on embracing collaboration and working
                  alongside talented individuals to bring innovative ideas to
                  life.
                </p>
                {/* <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Download resume
                </button> */}
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img
                  src={ProfileTwo}
                  className="relative z-10 w-[280px] m-auto sm:w-[600px]"
                  style={{ borderRadius: `${borderRadiusValue}px` }}
                />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Ecommerce} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  E-Commerce Webiste
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Full-Stack E-Commerce website that allows users top search
                  products and buy prodcuts online whcih uses Chapa Payment
                  Gateway and Telebirr and send to the users an inovice i pdf
                  format and also a qr code and s short SMS message dynamiccaly.
                </p>
                <div className="flex mt-12 gap-2">
                  {/* <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button> */}
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Menaheriya} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Bus Booking Website
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Full-Stack Bus Booking website that allows users to book a bus
                  and pay online whcih uses Chapa Payment Gateway and Telebirr
                  and send to the users an inovice in pdf format and also a qr
                  code and short SMS message dynamiccaly.
                </p>
                <div className="flex gap-2 mt-12"></div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={WebClassify} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Plant Disease Detector Website
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  This webiste allows users to upload a plant and then it will
                  classify the image in what type of disease it is affected and
                  show them the name of the plant diseaase and it's score in
                  percenatge
                </p>
                <div className="flex gap-4 mt-12"></div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Appp} height="50" className="w-full" />
                <h3 className="text-2xl font-semibold mt-8">
                  Android Application To Detect Plant Disease
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                An Android application is used to classify diseases in images, whether the images are selected from the gallery or captured using the camera.                </p>
                <div className="flex gap-2 mt-12">
                  {/* <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Mern} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  MERN Stack Websites
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  I have successfully undertaken multiple MERN Stack website
                  projects, such as developing social media clones that
                  encompass various features like authentication, post
                  functionality, including liking, disliking, and commenting, as
                  well as features like friend following and real-time updates.
                </p>
                <div className="flex gap-4 mt-12">
                  
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/eliasgebreamanuel">
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Flutter} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Flutter Projects
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  I have gained extensive experience in developing social media
                  clones using a variety of backend technologies such as
                  Node.js, Laravel, PHP, Firebase, and others. These clones
                  offer users authentication options through platforms like
                  Google, Facebook, GitHub, and Twitter. They include features
                  such as posting, liking, commenting, following friends, and
                  real-time screen updates. In addition to social media clones,
                  I have also developed an e-commerce app using Flutter.
                </p>
                <div className="flex gap-2 mt-12">
                  
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/eliasgebreamanuel">
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Next} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Next.js
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                I have completed numerous Next.js projects that encompass a range of full-stack features, including clones of popular platforms like Spotify, Netflix, and e-commerce websites. These projects have been developed using various backend technologies.
                </p>
                <div className="flex gap-4 mt-12">
                  
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/eliasgebreamanuel">
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Flutter} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Flutter Projects
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  I have gained extensive experience in developing social media
                  clones using a variety of backend technologies such as
                  Node.js, Laravel, PHP, Firebase, and others. These clones
                  offer users authentication options through platforms like
                  Google, Facebook, GitHub, and Twitter. They include features
                  such as posting, liking, commenting, following friends, and
                  real-time screen updates. In addition to social media clones,
                  I have also developed an e-commerce app using Flutter.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/eliasgebreamanuel">
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, TypeScript, JQuery
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    CSS, Sass, Bootstrap, Tailwind, Shadcn & MaterialUI
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Flutter, Dart</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>{" "}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React, React Native</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>{" "}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Angular, Vue</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Java, Kotlin</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>{" "}

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">PHP, CodeIgniter, Laravel</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">WordPress, Joomla</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    Machine Learning, Deep Learning, Natural Language Processing
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    Node.js, Next.js, Express, MongoDB, Supabase, Postgrel, MYSQL
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Cisco Certified Network Associate (CCNAv7) Routing and Switching
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engagement
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  B2 english
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Punctual
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <p>
                  Took internship at Minstry of Science and Innovation as System Developer and Analyst about 4 months.
                </p>
              </div>
              
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <p>
                  Have done a palnt disease detector websites and mobile application website 
                </p>
              </div>

               
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <p>
                  Have completed Cisco Certfied Network Assocaite (CCNAv7) Routing and Switching 
                </p>
              </div>
              
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                  Have done Full-Stack E-Commerce website project
                </p>
              </div>

              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                  Have done a Full Stack Bus Booking Website
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                  Working as a Full-Stack Software Developer
                </p>
              </div>
         
              
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2023</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
