// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import cn from "@/app/assets/tech_logo/shadecn.png";
import swagger from "@/app/assets/tech_logo/swagger.png";

// Experience Section Logo's
import softcrafty from "@/app/assets/company_logo/softcrafty.jpg";
import nss from "@/app/assets/company_logo/nss-logof.jpg";
import frelance from "@/app/assets/company_logo/frelanceitlab.png";
// Education Section Logo's

import dpi from "@/app/assets/education_logo/dpi.jpg";
import ph from "@/app/assets/education_logo/programminghero.jpg";
import udemy from "@/app/assets/education_logo/uaemy.webp";

// Project Section Logo's

import prophytes from "@/app/assets/work_logo/prophytes.png";
import taxpi from "@/app/assets/work_logo/taxpi.jpg";
import corbe from "@/app/assets/work_logo/corbe.jpg";
import lorezo from "@/app/assets/work_logo/lorezo.jpg";
import techure from "@/app/assets/work_logo/techure.png";
import grabtor from "@/app/assets/work_logo/graptor.png";
import { IProject } from "./types/project.type";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "GSAP", logo: gsapLogo },
      { name: "Shadcn", logo: cn },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  // {
  //   title: "Backend",
  //   skills: [
  //     { name: "Springboot", logo: springbootLogo },
  //     { name: "Node JS", logo: nodejsLogo },
  //     { name: "Express JS", logo: expressjsLogo },
  //     { name: "MySQL", logo: mysqlLogo },
  //     { name: "MongoDB", logo: mongodbLogo },
  //     { name: "Firebase", logo: firebaseLogo },
  //     { name: "PostgreSQL", logo: postgreLogo },
  //   ],
  // },
  {
    title: "Languages",
    skills: [
      // { name: "C", logo: cLogo },
      // { name: "C++", logo: cppLogo },
      // { name: "Java", logo: javaLogo },
      // { name: "Python", logo: pythonLogo },
      // { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      // { name: "Compass", logo: mcLogo },
      { name: "Swagger", logo: swagger },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: softcrafty,
    role: "Front-End Developer",
    company: "Softcrafty",
    date: "April 2025 - Present",
    desc: "Collaborated with cross-functional teams to build high-quality, user-facing features, integrating REST APIs and real-time Socket.IO functionality. I managed global state with Redux to ensure consistent data flow, applied on-page SEO best practices, and delivered a fast, accessible, and cross-browser–compatible user experience.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Next Js",
      "Redux",
      "Tailwind CSS",
      "Socket io",
    ],
  },
  {
    id: 1,
    img: nss,
    role: "Front-End Developer",
    company: "Nss Theme",
    date: "September 2024 - April 2025",
    desc: "Developed and maintained responsive, user-centric web applications using React.js and Next.js, building high-performance, SEO-friendly UI components with TypeScript and Tailwind CSS. Ensured cross-browser compatibility, accessibility, and smooth user experiences while optimizing performance through code splitting, lazy loading, and efficient state management.",
    skills: [
      "JavaScript",
      "ReactJS",
      "NextJS",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    id: 2,
    img: frelance,
    role: "Frontend Developer",
    company: "Freelance It Lab",
    date: "February 2024 - September 2024",
    desc: "Developed and maintained responsive user interfaces using HTML5, CSS3, Bootstrap, JavaScript, and jQuery, translating UI/UX designs into clean, pixel-perfect, and cross-browser–compatible web pages with seamless performance across desktop, tablet, and mobile devices.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma"],
  },
];

export const education = [
  {
    id: 0,
    img: dpi,
    school: "Dinajpur Polytechnic Institute,Dinajpur",
    date: "Jun 2016 - Jan 2020",
    grade: "3.71 CGPA",
    desc: "I completed  Diploma in Computer Engineering, where I gained hands-on experience in programming fundamentals, computer systems, and application development, providing a solid technical foundation for my career in software development.",
    degree: "Diploma in Engineer Computer",
  },
  {
    id: 1,
    img: ph,
    school: "Programing Hero",
    date: "",
    grade: "",
    desc: "After completing the Programming Hero Complete Web Development Course, i have practical skills in building responsive websites, developing interactive front-end applications with JavaScript and React, and understanding full-stack development using Node.js, Express, and MongoDB. The course also prepares me to work with real projects, version control, and deployment, making me ready for junior web development roles or freelance work.",
    degree: "Complete Web Development",
  },
  {
    id: 2,
    img: udemy,
    school: "Udemy",
    date: "Apr 22 - Jul 22",
    // grade: "78%",
    desc: "This course i learn how to use Next.js in the real world.  use the Next.js framework to build a property rental website where users can browse, search and manage property listings. Next.js is the future of React. Server-side rendered websites and static websites are becoming the norm over single page applications and Next.js allows to build both with ease.",
    degree: "Next.js From Scratch",
  },
  // {
  //   id: 3,
  //   img: vpsLogo,
  //   school: "Vatsalya Public School Govardhan, Mathura",
  //   date: "Apr 2015 - March 2016",
  //   grade: "87.5%",
  //   desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
  //   degree: "CBSE(X), Science with Computer Application",
  // },
];

export const projects: IProject[] = [
  {
    id: 0,
    title: "Prophytes",
    description:
      "Prophytes is a private, verified networking platform designed exclusively for members of the Divine Nine (D9) Greek organizations, helping them reconnect with chapters, find fellow members, and build community through secure connections, business directories, and economic empowerment initiatives. The site emphasizes identity verification and meaningful engagement within the D9 network while offering tools to support collaboration, communication, and shared growth.",
    image: prophytes,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Next Js",
      "Redux",
      "Tailwind CSS",
      "Socket io",
    ],
    github: "https://github.com/ProphytesApp/ProphytesDesktopWeb",
    webapp: "https://www.prophytes.com/",
  },
  {
    id: 1,
    title: "Online Taxi Service",
    description:
      "Taxpi – Online Taxi Service React & Nextjs Template is a library for building an Online Taxi Service using React and Nextjs. It includes predefined web components that help you build your site. The Taxpi Template has a fully responsive layout. It fits perfectly on various displays and resolutions, from regular desktop screens to tablets, iPads, iPhones, and small mobile devices.",
    image: taxpi,
    tags: [
      "JavaScript",
      "React JS",
      "Next JS",
      "Typescript",
      "Tailwind css",
      "SEO",
    ],
    github: "",
    webapp:
      "https://preview.themeforest.net/item/taxpi-online-taxi-service-react-nextjs-template/full_screen_preview/54824531",
  },
  {
    id: 2,
    title: "Corbe - Creative Digital Agency",
    description:
      "Corbe – Creative Digital Agency Reactjs & Nextjs Template which is modern, clean, professional, creative and presentable. It is suitable for creative agency, web agency, design studio and all other kinds of agencies. It is useful for web designers and developers as well as other UI/UX designers. Different header elements with layouts.",
    image: corbe,
    tags: [
      "JavaScript",
      "React JS",
      "Next JS",
      "Typescript",
      "Tailwind css",
      "SEO",
    ],
    github: "https://github.com/abdul-dulal/corbe",
    webapp:
      "https://themeforest.net/item/corbe-creative-digital-agency-reactjs-nextjs-template/56581037?s_rank=2",
  },
  {
    id: 3,
    title: "Lorezo - Transport and Logistics",
    description:
      "Lorezo – Transport and Logistics React & Nextjs Template which is modern, clean, professional, creative and presentable. It is is designed precisely to fulfill the requirements of diverse logistics and transportation businesses, including cargo, courier, delivery service, logistics companies, air freight, rail freight, maritime transport, warehouse, etc., or any business-type websites",
    image: lorezo,
    tags: [
      "JavaScript",
      "React JS",
      "Next JS",
      "Typescript",
      "Tailwind css",
      "SEO",
    ],
    github: "https://github.com/abdul-dulal/lorezo",
    webapp:
      "https://preview.themeforest.net/item/lorezo-transport-and-logistics-react-nextjs-template/full_screen_preview/57444324",
  },
  {
    id: 4,
    title: "Techure – Creative Modern Next.js & Tailwind CSS Template",
    description:
      "Techure is a modern, clean, and highly professional Next.js & Tailwind CSS template designed for creative agencies, startups, web development companies, digital studios and freelancers. Built with the latest web technologies, Techure delivers excellent performance, scalability, and a smooth user experience across all devices.",
    image: techure,
    tags: [
      "JavaScript",
      "React JS",
      "Next JS",
      "Typescript",
      "Tailwind css",
      "SEO",
    ],
    github: "https://github.com/SoftCrafty/techure-next.js",
    webapp: "https://next.softcrafty.com/techure/",
  },
  {
    id: 5,
    title: "Webverse Digital",
    description:
      "Graptor – build with the specifically for technical, cybersecurity, entertaining, business for IT, educational & scientific purposes, and more. This is highly customizable – display awesome for all devices",
    image: grabtor,
    tags: [
      "JavaScript",
      "React JS",
      "Next JS",
      "Typescript",
      "Tailwind css",
      "SEO",
    ],
    github: "https://github.com/abdul-dulal/IT-solution",
    webapp: "https://it-solution-chi.vercel.app/",
  },
];
