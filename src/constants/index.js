import {
  mobile,
  backend,
  creator,
  web,
  reactjs
} from "../assets";
import git from '../assets/tech/git.png'
import javascript from '../assets/tech/javascript.png'
import mongodb from '../assets/tech/mongodb.png'

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

const experiences = [
  {
    title: "Website Building",
    icon: javascript,
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
    icon: git,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I offer website maintenance services to ensure your website runs smoothly and remains up-to-date. From regular backups and security updates to content management and performance optimization, I can take care of all aspects of website maintenance, allowing you to focus on your core business.",
    ],
  },
  {
    title: "Full stack Development",
    icon: mongodb,
    iconBg: "#E6DEDD",
    points: [
      "In the modern world of online services, a high functional web application is a must have for any business. Make your web applications stand out with quality back-end, front-end and full-stack development services.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


export const skills = [
  {
    name: "HTML5",
    img: "data:image/png;base64,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"
  },
  {
    name: "CSS3",
    img: "https://protap-ghosh.web.app/assets/CSS3-562c5b25.png"
  },
  {
    name: "BootStrap",
    img: "https://protap-ghosh.web.app/assets/bootstrap-6beacf96.png"
  },
  {
    name: "Tailwind CSS",
    img: "https://protap-ghosh.web.app/assets/tailwand-7d4d93c0.png"
  },
  {
    name: "JavaScript",
    img: "https://protap-ghosh.web.app/assets/javascript-9085ef9e.png"
  },
  {
    name: "React JS",
    img: "https://protap-ghosh.web.app/assets/react-fa85d0ca.png"
  },

  {
    name: "TypeScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
  },
  {
    name: "Redux",
    img: "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
  },  
  {
    name: "Node JS",
    img: "https://protap-ghosh.web.app/assets/nodejs-c716a3d9.png"
  },
  {
    name: "Express JS",
    img: "https://protap-ghosh.web.app/assets/expressjs-8553f117.png"
  },
  {
    name: "Mongo DB",
    img: "https://protap-ghosh.web.app/assets/mongodb-fedbcc5f.png"
  },

  {
    name: "Firebase",
    img: "https://protap-ghosh.web.app/assets/firebase-b924bd73.png"
  },
  {
    name: "JWT",
    img: "https://seeklogo.com/images/J/jwt-logo-65D86B4640-seeklogo.com.png"
  },
  {
    name: "Stripe",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
  },
  {
    name: "Daisy UI",
    img: "https://i.ibb.co/r78gFgw/yellow-daisy-logo-EB1988-E937-seeklogo-com.jpg"
  },
  
]

export const tools = [
  {
    name: "Git",
    img: "data:image/png;base64,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"
  },
  {
    name: "Github",
    img: "https://protap-ghosh.web.app/assets/GitHub-6c5ff08d.png"
  },
  {
    name: "Postman",
    img: "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png"
  },
  {
    name: "Vercel",
    img: "https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png"
  },
  {
    name: "Canva",
    img: "https://protap-ghosh.web.app/assets/canva-3fc2679a.png"
  },
  {
    name: "Figma",
    img: "https://protap-ghosh.web.app/assets/Figma-5acf939c.png"
  },

  {
    name: "VS Code",
    img: "https://protap-ghosh.web.app/assets/vscode-64e295f4.png"
  },
  {
    name: "npm",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png"
  },
  {
    name: "Chrome Dev Tool",
    img: "https://i.ibb.co/TRzPjdG/icon-512.png"
  },
  {
    name: "Framer Motion",
    img: "data:image/jpeg;base64,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"
  },
  {
    name: "Netlify",
    img: "data:image/png;base64,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"
  },
]


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
    "id": 3,
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
    "id": 4,
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
    "id": 5,
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
    "stack": "Full Stack",
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

export { services,  experiences, projects };
