import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Python Developer",
      icon: web,
    },
    {
      title: "HTML Developer",
      icon: backend,
    },
    {
      title: "Django Developer",
      icon: mobile,
    },
    {
      title: "Tkinter Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "Zesdro Tehnologies",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2023 - Current",
      points: [
        "Here I am developing the Backend of web pages and mobile apps using Django API",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Lora Fashion",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Feb 2023",
      points: [
        "I have created a website for a cloth shop (https://www.lorawomen.com/)",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "ERP Software Developer",
      company_name: "Divain Roiz LLP Support",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Sep 2022",
      points: ["Worked as Software developer(focused on both front-end and back-end) on that project",
      "Used languages are Python, Tkinter, Mysql",
      "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Python Full stack Intern",
      company_name: "One Team Solutions",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - Nov 2021",
      points: ["And also learned front-end HTML static and dynamic pages and uploaded in google firebase",
        "I got an opportunity to know the back-end language python deeply",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Near Me",
      description:
        "App & Web-based platform that allows users to search nearby, Hotels, Fashion Shops, Top Restaurents, and Shop with best offers and Pre-Order what you need.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
        {
          name: "API",
          color: "white-text-gradient",
        }
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Web Page",
      description:
        "I have successfully designed and implemented a static webpage for a clothing store. This project showcased my skills in web development, including HTML, CSS, and potentially java for backend tasks."
        ,
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "java script",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.lorawomen.com/",
    },
    {
      name: "ERP Billing Software",
      description:
        "Its a Medical ERP billing software created for Divain Roiz LLP Support at Malappuram.Where i designed and created with two members in a team.I have worked both frontend and backend.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
          color: "green-text-gradient",
        },
        {
          name: "MySql",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };