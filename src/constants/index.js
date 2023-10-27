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
    title: "Services",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Website Building",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Your webpage deserves to be dynamic, smooth, and user accessible. Let’s combine your ideas and my skills to create something new and make that happen. After all, the first look at your website should leave a lasting good impression.",
      "I provide end-to-end website development services, including design, front-end development, back-end development, and database integration. Whether you need a simple static website or a complex web application."
    ],
  },
  {
    title: "React App Development",
    icon: reactjs,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "I specialize in developing interactive and responsive web applications using the React framework. From single-page applications (SPAs) to complex UI/UX designs.",
    ],
  },
  {
    title: "Website Maintenance",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I offer website maintenance services to ensure your website runs smoothly and remains up-to-date. From regular backups and security updates to content management and performance optimization, I can take care of all aspects of website maintenance, allowing you to focus on your core business.",
    ],
  },
  {
    title: "Full stack Development",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "In the modern world of online services, a high functional web application is a must have for any business. Make your web applications stand out with quality back-end, front-end and full-stack development services.",
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
    "id": 1,
    "name": "GameSpace",
    "stack": "Full Stack",
      "type": "Play And Sell Games",
      "technologies": ["HTML", "CSS", "Tailwind", "React", "NodeJS", "ExpressJS", "MongoDB", "Socket IO"],
      "desc": "This is a Team Project.This website is designed to play and sell games.Anyone can play games on the website. From here user can download games. User can get live support through live chat. And lastly users can play 2D games.On the home page you can see all these users and some games to download.",
      "liveLink": "https://gamespace777.netlify.app/login",
      "clientLink": "https://github.com/alamineimon/gamespace-client",
      "serverLink": "https://github.com/alamineimon/gamespace-server"
  },
  
  {
    "id": 2,
    "name": "Luxury Vehicles",
    "stack": "Full Stack",
      "type": "Used Products Resale",
      "technologies": ["HTML", "CSS", "Tailwind", "React", "NodeJS", "ExpressJS", "MongoDB"],
      "desc": "This Website is for 3 types of users. They are normal users, Buyers, and ellers.The normal user will visit the website. Buyers can buy products and sellers will sell products. Lastly, they have an admin account that can manage the users.",
      "liveLink": "https://used-products-resale-fa9a4.firebaseapp.com/",
      "clientLink": "https://github.com/mrrafi5869/used-products-resale-client-repo",
      "serverLink": "https://github.com/mrrafi5869/used-products-resale-server-repo"
  },

  {
    "id": 3,
    "name": "Dream Weaver",
    "stack": "Full Stack",
      "type": "Service Review",
      "technologies": ["HTML", "CSS", "Tailwind", "React", "NodeJS", "ExpressJS", "MongoDB"],
      "desc": "If you want to send a review you have to login. After sending the review, You can see the review on my reviews page. And if you click the details button you can see all details. You can also add a new service. After adding a new service you",
      "liveLink": "https://service-review-9c7fb.web.app/",
      "clientLink": "https://github.com/mrrafi5869/service-review-client-repo",
      "serverLink": "https://github.com/mrrafi5869/service-review-server-repo"
  },

  {
    "id": 4,
    "name": "Nursing Home",
    "stack": "Full Stack",
      "type": "Doctors Portal",
      "technologies": ["HTML", "CSS", "Tailwind", "React", "NodeJS", "ExpressJS", "MongoDB"],
      "desc": "This Website is for 3 types of users. They are normal users, Buyers, and sellers.The normal user will visit the website. Buyers can buy products and sellers will sell products. Lastly, they have an admin account that can manage the users.",
      "liveLink": "https://doctors-portal-b43f3.web.app/",
      "clientLink": "https://github.com/mrrafi5869/Doctors-Portal-Client",
      "serverLink": "https://github.com/mrrafi5869/Doctors-Portal-Server"
  },

  {
    "id": 5,
    "name": "Programming Hero",
    "stack": "Front-End",
      "type": "Learn WebDevelopment",
      "technologies": ["HTML", "CSS", "Tailwind", "React", "NodeJS", "ExpressJS", "MongoDB"],
      "desc": "This Website is for selling courses. If you want to buy any course first of all you have to login. You can login by Google, GitHub, and Email. There have six types of courses. And those are premium courses. You can download it by PDF.",
      "liveLink": "https://learning-platform-websit-a1b26.web.app/",
      "clientLink": "https://github.com/mrrafi5869/learning-platform-website-client-repo",
      "serverLink": "https://github.com/mrrafi5869/learning-platform-website-server-repo"
  },

  

  {
    "id": 6,
    "name": "Quiz Crackers",
    "stack": "Front-End",
      "type": "Quiz Exam",
      "technologies": ["HTML", "CSS", "Bootstrap", "React"],
      "desc": "This website is about is quiz test. After opening the website, You can see a navbar, Header also some quiz items. You can practice any quiz by clicking any item of the quiz. There is also a 'Statistics' button. If you click on the button you can see a Statistics chart of the quiz.",
      "liveLink": "https://symphonious-panda-15ad04.netlify.app/topics",
      "clientLink": "https://github.com/mrrafi5869/quiz-crackers-repo"
  },

  {
    "id": 7,
    "name": "News 24",
    "stack": "Front-End",
      "type": "News Paper",
      "technologies": ["HTML", "CSS", "Bootstrap", "JavaScript"],
      "desc": "It is a news-related website. It is done with Rest API. There are some topics and each topic has some news. If you want you can read the news as you like. There is also a blog section. If you click on the blog button you will redirect to the blog page.",
      "liveLink": "https://endearing-biscochitos-9ad4a0.netlify.app/",
      "clientLink": "https://github.com/mrrafi5869/Fix-Type-Monster-issues"
  },

  {
    "id": 8,
    "name": "Fit Zone",
    "stack": "Front-End",
      "type": "Gym Center",
      "technologies": ["HTML", "CSS", "React JS"],
      "desc": "This is a gym center. There are six types of accessories. Every accessory has a time and a button. You can choose any accessories. If you click any accessories, This accessories time will add to the 'exercise time'.Also, there is a break time list. If you click on the time, This time will add in the 'break time'",
      "liveLink": "https://thunderous-souffle-54cc05.netlify.app/",
      "clientLink": "https://github.com/mrrafi5869/Ultra-Active-Club"
  },

  {
    "id": 9,
    "name": "Sports Club",
    "stack": "Front-End",
      "type": "Sports investment",
      "technologies": ["HTML", "CSS", "Bootstrap", "JavaScript"],
      "desc": "There are two sections.One section is navbar and another one is Players name also a calculation part.You can choose 6 members.Basically this website is for sport's club budgets and members",
      "liveLink": "https://wonderful-puppy-713a42.netlify.app/",
      "clientLink": "https://github.com/mrrafi5869/assignment-5"
  }
];

export { services, technologies, experiences, testimonials, projects };
