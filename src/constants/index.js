import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  reactNative,
  redux,
  tailwind,
  spring,
  nodejs,
  mysql,
  sqlite,
  docker,
  github,
  aws,
  azure,
  klimakampen,
  documentationWebsite,
  groceryShop,
  TourTravel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React-Native",
    icon: reactNative,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "SQLite",
    icon: sqlite,
  },

  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Klimakampen ApS",
    icon: klimakampen,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Upgrading the Klimakampen app to a new version for better user experience.",
      " Handling a variety of tasks based on user preferences.",
      " Worked on both the backend (Node.js) and frontend (React-Native) of the app",
      "Gaining experience with AWS services and NoSQL database",
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
    name: "Documentation",
    description:
      "This site showcasing Comprehensive resources for developers covering core features and detailed guidelines of Node js, designing RESTful APIs," +
      "including best practices, endpoint documentation and terminal commands. ",
    tags: [
      {
        name: "Html",
        color: "orange-text-gradient",
      },
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: documentationWebsite,
    wesite_link: "",
    source_code_link: "https://github.com/M-N-Hossain/Documentation",
  },
  {
    name: "Grocery Shop",
    description:
      "This was a 24-hour exam project and it allows users to organize the list product, view the entire inventory, " +
      " place orders, and record delivery details and so on. With CRUD operations, administrators can efficiently manage the product database",

    tags: [
      {
        name: "Html",
        color: "orange-text-gradient",
      },
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: groceryShop,
    wesite_link: "",
    source_code_link:
      "https://github.com/M-N-Hossain/GroceryDeliverySystemFrontend.git",
  },
  {
    name: "Tour&Travel",
    description:
      "It is a fun project while learning about react. It potrays my ability and understanding of React and its core concepts.",
    tags: [
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: TourTravel,
    wesite_link: "https://transcendent-gaufre-609435.netlify.app/",
    source_code_link: "https://github.com/M-N-Hossain/tour-travelproject",
  },
];

export { services, technologies, experiences, testimonials, projects };
