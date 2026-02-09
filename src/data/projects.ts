import finance2 from "../assets/finance/finance-2.jpg";
import finance3 from "../assets/finance/finance-3.jpg";
import financeA from "../assets/finance/finance-A.jpg";
import financeB from "../assets/finance/finance-B.jpg";

import medi1 from "../assets/medi/medi1.jpg";
import medi2 from "../assets/medi/medi2.jpg";
import medi3 from "../assets/medi/medi3.jpg";
import medi4 from "../assets/medi/medi4.jpg";
import medi5 from "../assets/medi/medi5.jpg";



import bel from "../assets/bel/bel2.png";
import bel1 from "../assets/bel/bel3.png";
import bel2 from "../assets/bel/bel4.png";

import game1 from "../assets/games/game1.png";
import game2 from "../assets/games/game2.png";
import game3 from "../assets/games/game3.png";
import game4 from "../assets/games/game4.png";

export const projects = [
  {
    id: 1,
    title: "Finance Management System",
    type: "back",
    img: "/public/projects/finance-A.jpg",
    techs: ["Laravel", "postman", "git", "MySQL"],
    github: "https://github.com/Yonas721/Finance_Managment_Project",
    description:
      "As a lead developer, I architected and delivered a monolithic web application using Laravel, featuring robust RESTful APIs integrated with a MySQL database. I optimized complex queries and implemented secure data handling to ensure high performance and reliability. To meet core business needs, I engineered key integrations, including the Chapa payment gateway , and configured email services via MailTrao for automated user communications. Leading a team of three developers in an agile environment, I successfully coordinated sprints to deliver features on schedule and within budget.",

    alt: "finance project image",

    images: [financeA, finance2, finance3, financeB],
  },
  {
    id: 2,
    title: "MediConnect Integrated Healhtcare Solutions",
    type: "back",
    github:
      "https://github.com/Yonas721/mediconnect_integrated_healthcare_solution",
    img: "/public/projects/medi-1.jpg",
    techs: ["Laravel", "postman", "git", "MySQL"],
    description:
      "For MediConnect, I developed a secure and scalable healthcare management platform using Laravel and MySQL. The system centralized financial operations, implementing core features for patient billing, payment processing, and real-time transaction history tracking. Engineered to handle up to 1,000 daily transactions efficiently, the application was optimized for low latency and reliable performance within the integrated healthcare ecosystem.",

    alt: "Mediconnect project image",
    images: [medi1, medi2, medi3, medi4, medi5],
  },
  {
    id: 3,
    title: "Belhuman Hair",
    type: "front",
    github: "https://github.com/Yonas721/mak-human",
    img: "/public/projects/bel2.png",
    techs: ["HTML",  "TS", "React", "TailwindCSS"],
    description:
      "Designed and developed a specialized e-commerce platform for a luxury human hair extensions brand. The website showcases an extensive, visually-rich catalog with detailed filtering by hair type, texture, length, and color. Built with a focus on conversion, it integrates secure payment processing, a streamlined checkout, and a mobile-first design to provide a seamless, trustworthy shopping experience for a discerning clientele.",
    alt: "belhuman hair project image",

    images: [bel, bel1, bel2],
  },
  {
    id: 4,
    title: "Video Game Site",
    type: "front",
    github: "https://github.com/Yonas721/video-game-site",
    img: "/public/projects/game1.png",
    techs: ["HTML", "TS", "React", "TailwindCSS"],
    description:
      "Architected a dynamic community website for video game enthusiasts. The platform features a comprehensive game library with data from external APIs, user-generated reviews, and personalized collection tracking. Developed with performance in mind, it offers an engaging, interactive hub with a dark-themed UI, social features, and real-time updates to foster a dedicated gaming community.",

    alt: "video game website image",

    images: [game1, game2, game3, game4],
  },
];
