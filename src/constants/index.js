import {
  mobile,
  
  backend,
  creator,
  tredence,
  womentechies
  web,
  kotlin,
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
  studybuddy,
  soothe,
  resume,
  care,
  eventnest,
  sirvicy,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  SIH,
  yantra,
  vakeel,
  prewery,
  devjams,
  resumeai
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
    title: "LangChain Developer",
    icon: creator,
  },
];

const technologies = [

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "InfinityAI",
    company_name: "Tredence",
    icon: tredence,
    iconBg: "#383E56",
    date: "March 2025",
    points: [
      "Built a project under the AI/ML track with real-world applications.",
      "Worked with React, Kotlin, and Python to create a scalable solution.",
      "Developed a platform to analyze legal documents",
      "Focused on user-centric design and efficient backend architecture.",
    ],
  },
  {
    title: "WomenTechies'25",
    company_name: "Google",
    icon: womentechies,
    iconBg: "#383E56",
    date: "April 2025",
    points: [
      "Built a project under the AI/ML track with real-world applications.",
      "Worked with React, Kotlin, and Python to create a scalable solution.",
      "Developed a cloud-integrated system for real-time data processing.",
      "Focused on user-centric design and efficient backend architecture.",
    ],
  },
  {
    title: "DevJams",
    company_name: "Google",
    icon: devjams,
    iconBg: "#383E56",
    date: "November 2024",
    points: [
      "Built a project under the AI/ML track with real-world applications.",
      "Worked with React, Kotlin, and Python to create a scalable solution.",
      "Developed a cloud-integrated system for real-time data processing.",
      "Focused on user-centric design and efficient backend architecture.",
    ],
  },
  {
    title: "Yantra’25 Central Hack",
    company_name: "VIT Vellore",
    icon: yantra,
    iconBg: "#E6DEDD",
    date: "Feburary 2025",
    points: [
      "Developed an AI-powered mental health support platform for women in high-stress careers.",
      "Integrated AI-driven journal analysis, burnout analytics, and mentorship tools.",
      "Used LangChain and Firebase to enhance chatbot capabilities.",
      "Promoted Sustainable Development Goals (SDGs), focusing on gender equality and well-being.",
    ],
  },
  {
    title: "Smart India Hackathon",
    company_name: "VIT Vellore",
    icon: SIH,
    iconBg: "#383E56",
    date: "September 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Prewery Pvt. Ltd.",
    icon: prewery,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May-2024",
    points: [
      "Built and integrated RESTful APIs for seamless backend communication using SpringBoot.",
      "Designed and implemented user-friendly features.",
      "Deployed entire projects and websites, ensuring smooth operation using React.",
      "Rolled out updates and enhancements.",
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
    name: "VakeelAI",
    description:
      "A platform that is an AI-powered app that helps small business owners and individuals analyze their contracts.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "OpenRouter",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      }
    ],
    image: vakeel,
    source_code_link: "legalgpt-seven.vercel.app",
  },
  {
    name: "SootheAI",
    description:
      "A platform that provides personalized mental health support using AI-driven journal analysis, mood tracking, mentorship matching, and AI-powered conversation simulation.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      }
    ],
    image: soothe,
    source_code_link: "https://soothe-ai.vercel.app/",
  },
   {
    name: "AI Resume Builder",
    description:
      " AI-powered resume builder using React, Gemini API, Strapi, and Clerk. It generates professional resumes quickly and efficiently.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Strapi",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Clerk",
        color: "pink-text-gradient",
      }
    ],
    image: resumeai,
    source_code_link: "https://github.com/bhumitgoyal/ai-resume-builder-strapi-admin",
  },
  
  
  {
    name: "CareBeds",
    description:
      "A system for real-time tracking of bed availability, OPD queues, and patient prioritization, integrated with a city-wide healthcare module. Uses AI for predictive analytics and resource management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "pink-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "pink-text-gradient",
      }
    ],
    image: care,
    source_code_link: "https://github.com/bhumitgoyal/carebedsapp",
  },
  {
    name: "ResumeMate",
    description:
      "A tool that analyzes resumes using NLP to extract key skills, match candidates to job descriptions, and provide improvement suggestions.",
    tags: [
      {
        name: "LangChain",
        color: "blue-text-gradient",
      },
      {
        name: "Pyhton",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      }
    ],
    image: resume,
    source_code_link: "https://resumeanalyzer-jade.vercel.app/",
  },
  {
    name: "Sirvicy",
    description:
      "Sirvicy is a smart service management app for CAT’s workers and mechanics, optimizing vehicle servicing with real-time tracking, automated job assignments, and maintenance insights for smoother operations",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "JetPack",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "pink-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "pink-text-gradient",
      }
    ],
    image: sirvicy,
    source_code_link: "https://github.com/bhumitgoyal/Sirvicy",
  },
  {
    name: "EventNest",
    description:
      "EventNest is an AI-powered event management platform designed to simplify event organization, ticketing, and audience engagement. It provides a seamless experience for both event organizers and attendees by integrating smart recommendations, real-time updates, and automated workflows.",
    tags: [
      {
        name: "Firestore",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "pink-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "pink-text-gradient",
      }
    ],
    image: eventnest,
    source_code_link: "https://github.com/bhumitgoyal/eventnest",
  },
  {
    name: "StudyBuddy",
    description:
      "StudyBuddy is an AI-driven study assistant designed to enhance learning efficiency, boost productivity, and personalize study sessions. It leverages AI to generate concise notes, quizzes, and study plans while providing smart task management and real-time doubt-solving support.",
    tags: [
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "pink-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "pink-text-gradient",
      }
    ],
    image: studybuddy,
    source_code_link: "https://github.com/bhumitgoyal/Study-Buddy",
  }
];

export { services, technologies, experiences, testimonials, projects };
