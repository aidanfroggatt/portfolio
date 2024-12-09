interface Work {
  index: number;
  id: string;
  title: string;
  association: string;
  description: string;
  image: Image;
  color: string;
  spotlight: boolean;
  award?: string;
  startDate: Date;
  endDate?: Date;
  overview: Overview;
  highlights: Highlights;
  context?: Context;
  links?: Link[];
}

interface Image {
  src: string;
  alt: string;
}

interface Overview {
  description: string;
  role: Role;
  team?: TeamMember[];
  technologies: Technology[];
}

interface Role {
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
}

interface Technology {
  icon: string;
  name: string;
}

interface Highlights {
  description: string;
  items: HighlightItem[];
}

type HighlightItem = {
  asset: VideoAsset | ImageAsset;
};

interface ImageAsset {
  alt: string;
  src: string;
  type: "IMAGE";
}

interface VideoAsset {
  alt: string;
  src: string;
  type: "VIDEO";
  poster: string; // Required for VIDEO type
}

interface Context {
  description: string;
}

interface Link {
  icon: string;
  link: string;
  name: string;
}

export const work: Work[] = [
  {
    index: 2,
    id: "burloak-insight",
    title: "Burloak Insight",
    association: "Burloak Technologies",
    description: "Data analytics and report generation platform for additive manufacturing.",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fburloak_insight_hero.png?alt=media&token=6c0bc79c-4213-4853-923d-ed380eb12cba",
      alt: "Burloak Insight Mockup",
    },
    color: "#8884D8",
    spotlight: true,
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-09-30"),
    overview: {
      description: `Burloak Insight integrates PDF scrapers, a centralized database, and data analysis dashboards to streamline data access and analysis, enabling informed decision-making based on diverse data sets. By automating tasks like report retrieval and data access, it enhances operational efficiency within the organization.`,
      role: {
        title: "Software Architect and Developer",
        description: "Architecture, Stack Selection, Development, and Testing."
      },
      team: [
        {
          name: "Eric Tenuta",
          role: "Materials Engineer"
        },
        {
          name: "Hamid Azizi",
          role: "Engineering Manager"
        },
      ],
      technologies: [
        {
          icon: "SiReact",
          name: "React"
        },
        {
          icon: "SiJavascript",
          name: "JavaScript"
        },
        {
          icon: "SiNodedotjs",
          name: "Node.js"
        },
        {
          icon: "SiMysql",
          name: "MySQL"
        },
        {
          icon: "SiTailwindcss",
          name: "Tailwind CSS"
        },
        {
          icon: "SiPython",
          name: "Python"
        },
        {
          icon: "SiExpress",
          name: "Express.js"
        }
      ],
    },
    highlights: {
      description: "An internal company dashboard created to centralize truth, analyze data, generate reports, and direct engineering decisions.",
      items: [
        {
          asset: {
            alt: "Raw Data Dashboard",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fdatabase_video%2Fburloak_insight_database_video.mp4?alt=media&token=95786266-73ca-4d74-b5cf-70cb3f157fe1",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fdatabase_video%2Fposter.png?alt=media&token=a4fea23f-ffd6-4275-a2d0-f5025c77200b"
          }
        },
        {
          asset: {
            alt: "Data Analysis Dashboard",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fdata_analysis_video%2Fburloak_insight_data_analysis_video.mp4?alt=media&token=d551b535-3f33-4ca0-9e66-ad9252251dec",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fdata_analysis_video%2Fposter.png?alt=media&token=296c9f1a-c8d1-4209-bf21-9e46ffe1db53"
          }
        },
        {
          asset: {
            alt: "Report Generation Dashboard",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Freport_generation_video%2Fburloak_insight_report_generation_video.mp4?alt=media&token=a0811749-bba1-4651-9503-6303612acb52",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Freport_generation_video%2Fposter.png?alt=media&token=c9ba4891-d23d-4fc7-850f-a99b3a8bd610"
          }
        }
      ]
    }
  },
  {
    id: "secure-chat-app",
    index: 4,
    title: "Secure Chat App",
    association: "McMaster University",
    description: "Kerberos authentication, AES encryption, and real-time chat.",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsecure-chat-app%2Fsecure_chat_app_hero.png?alt=media&token=a539da5f-142a-44f2-b6c1-181391f03ed6",
      alt: "Secure Chat App Mockup",
    },
    color: "#adacb4",
    spotlight: false,
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-04-30"),
    overview: {
      description: "This secure chat app offers a robust and encrypted communication platform with advanced features like Kerberos Authentication Protocol and Key Distribution Center integration.",
      role: {
        title: "Software Architect and Developer",
        description: "Architecture selection, design, and development."
      },
      team: [
        {
          name: "Kyle McMaster",
          role: "Software Developer"
        },
        {
          name: "Rosa Chen",
          role: "Software Developer"
        },
        {
          name: "Daniel Franze Da Silva",
          role: "Software Developer"
        }
      ],
      technologies: [
        {
          name: "React Native",
          icon: "SiReact"
        },
        {
          name: "Firebase",
          icon: "SiFirebase"
        },
        {
          name: "Python",
          icon: "SiPython"
        },
        {
          name: "Flask",
          icon: "SiFlask"
        },
        {
          name: "Expo",
          icon: "SiExpo"
        }
      ],
    },
    highlights: {
      description: "A secure chat application that utilizes Kerberos authentication and AES encryption to create secure realtime chats.",
      items: [
        {
          asset: {
            alt: "Realtime Group Chat",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsecure-chat-app%2Frealtime_groupchat%2Frealtime_groupchat.mp4?alt=media&token=804427e7-62db-4e74-ae82-4c866b98ce15",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsecure-chat-app%2Frealtime_groupchat%2Fposter.png?alt=media&token=9c01f97c-3614-4bbe-aab8-5af3eaaa756b"
          }
        },
        {
          asset: {
            alt: "Kerberos Authentication",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsecure-chat-app%2Fkerberos_authentication%2Fkerberos_authentication.mp4?alt=media&token=74ad5a7e-eb52-4e31-9a99-d994689865b6",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsecure-chat-app%2Fkerberos_authentication%2Fposter.png?alt=media&token=13a2e578-8715-41f8-bcdf-e3a67ca01cc8"
          }
        },
      ]
    },
    links: [
      {
        icon: "SiGithub",
        link: "https://github.com/SE3A04-Project-Team/secure-chat-app",
        name: "GitHub"
      },
    ],
  },
  {
    id: "snapcycle",
    index: 5,
    title: "SnapCycle",
    association: "MacHacks 3",
    description: "Award winning AI-powered recyclability detection app.",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsnapcycle%2Fsnapcycle_hero.png?alt=media&token=e946bed8-2205-440a-b82e-687cc2dfdd6b",
      alt: "SnapCycle Mockup",
    },
    color: "#75BED1",
    spotlight: false,
    award: "Best Environmental Hack",
    startDate: new Date("2023-02-03T18:00:00Z"),
    endDate: new Date("2023-02-05T06:00:00Z"),
    overview: {
      description: "SnapCycle is a web app where the user can scan an item to receive info on its recyclability and how to dispose of it! Say no more to scientific articles going into detail on things you don't need to know, SnapCycle tells you exactly what you need to do on the spot!",
      role: {
        title: "Software Developer",
        description: "Ideation, design, and developement."
      },
      team: [
        {
          name: "Luai Bashar",
          role: "Software Developer",
        },
        {
          name: "Gabriel Hernandez",
          role: "Software Developer",
        }
      ],
      technologies: [
        {
          icon: "SiReact",
          name: "React"
        },
        {
          icon: "SiJavascript",
          name: "JavaScript"
        },
        {
          icon: "SiPython",
          name: "Python"
        },
        {
          icon: "SiPytorch",
          name: "PyTorch"
        },
        {
          icon: "SiTailwindcss",
          name: "Tailwind CSS"
        },
        {
          icon: "SiFigma",
          name: "Figma"
        }
      ]
    },
    highlights: {
      description: "An award-winning AI-powered tool for detecting the recyclability of items.",
      items: [
        {
          asset: {
            alt: "Plastic bottle detection",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsnapcycle%2Fhighlights%2Fplastic_bottle_detection%2Fplastic_bottle_detection.mp4?alt=media&token=201327a9-2c96-48f6-a425-8103d06f9892",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsnapcycle%2Fhighlights%2Fplastic_bottle_detection%2Fposter.png?alt=media&token=a85bd536-9e26-44a1-a782-7e6a10eadd33"
          }
        },
        {
          asset: {
            alt: "Website demo",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsnapcycle%2Fhighlights%2Fwebsite_demo%2Fsnapcycle-website.mp4?alt=media&token=7e4563ee-c418-444a-81d2-5ddfbd402fa2",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsnapcycle%2Fhighlights%2Fwebsite_demo%2Fposter.png?alt=media&token=70c4dfc6-cb38-488b-a1bf-34e6173e813e"
          }
        },
      ]
    },
    links: [
      {
        icon: "FaGlobe",
        link: "https://snap-cycle.github.io/SnapCycle/",
        name: "Website"
      },
      {
        icon: "SiGithub",
        link: "https://github.com/snap-cycle/SnapCycle",
        name: "GitHub"
      },
      {
        icon: "SiDevpost",
        link: "https://devpost.com/software/snapcycle-hyx3qv",
        name: "Devpost"
      }
    ],
  },
  {
    id: "swingers",
    index: 0,
    title: "Swingers",
    association: "Links Connect",
    description: "Cross platform social networking app for connecting golfers.",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2FTwoDeviceMockup.svg?alt=media&token=f1c50a13-3c8e-456c-9172-1d68376a2e0a",
      alt: "Swingers Mockup",
    },
    color: "#07663B",
    spotlight: true,
    startDate: new Date("2024-06-01"),
    overview: {
      description: "A cross-platform golf social networking app that connects golfers improving their golfing experience. The platform allows for golfers with similar interests to connect and golf together.",
      role: {
        title: "Co-Founder and CTO",
        description: "Architecture, Stack Selection, and Development"
      },
      team: [
        {
          name: "Jon Kerr",
          role: "Co-Founder and CEO"
        },
        {
          name: "Payton Robinson",
          role: "Co-Founder and COO"
        },
        {
          name: "Paul Robinson",
          role: "Investor and Advisor"
        },
        {
          name: "Neil Froggatt",
          role: "Lead Backend Developer"
        }
      ],
      technologies: [
        {
          icon: "SiTypescript",
          name: "TypeScript"
        },
        {
          icon: "SiPhp",
          name: "PHP"
        },
        {
          icon: "SiReact",
          name: "React Native"
        },
        {
          icon: "SiExpo",
          name: "Expo"
        },
        {
          icon: "SiRemix",
          name: "Remix"
        },
        {
          icon: "SiLaravel",
          name: "Laravel"
        },
        {
          icon: "SiTailwindcss",
          name: "Tailwind CSS"
        },
        {
          icon: "SiMysql",
          name: "MySQL"
        },
        {
          icon: "SiGithubactions",
          name: "GitHub Actions"
        },
        {
          icon: "SiVercel",
          name: "Vercel"
        },
        {
          icon: "SiJira",
          name: "Jira"
        },
        {
          icon: "SiFigma",
          name: "Figma"
        }
      ]
    },
    highlights: {
      description: "Creating a social networking app for golfers to connect and improve their golfing experience.",
      items: [
        {
          asset: {
            alt: "Client Side Validation",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2Fhighlights%2Fclient-side-validation%2Fclient-side-validation.mp4?alt=media&token=629d97b4-0e0b-4e93-bfc3-be83d1d805e8",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2Fhighlights%2Fclient-side-validation%2Fposter.png?alt=media&token=b042e35f-038d-4a17-ae01-fa1dba487b2a"
          }
        },
        {
          asset: {
            alt: "Email Verification",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2Fhighlights%2Femail-verification%2Femail-verification.mp4?alt=media&token=ceb65e43-bc2c-44c7-a159-8277002be0ce",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2Fhighlights%2Femail-verification%2Fposter.png?alt=media&token=8fe00d04-4e7c-4afa-a80f-403ca5acdb7b"
          }
        }
      ]
    },
    links: [
      {
        icon: "SiGithub",
        link: "https://github.com/swingersgolf",
        name: "GitHub"
      }
    ]
  },
  {
    id: "gdsc",
    index: 1,
    title: "Google DSC",
    association: "McMaster University",
    description: "Enhancing digital presence and engagement on all platforms.",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fgdsc-mockup.png?alt=media&token=77fae6de-4935-41ec-9308-e68d563f6dee",
      alt: "GDSC Icon"
    },
    color: "#FBBC04",
    spotlight: true,
    startDate: new Date("2024-05-01"),
    overview: {
      description: "Designing and developing the digital presence of the Google Developer Group at McMaster University. Enhancing the group's engagement and visibility on all platforms.",
      role: {
        title: "Team Lead",
        description: "Directing software development for marketing and branding efforts."
      },
      team: [
        {
          name: "Harrison Johns",
          role: "Software Developer"
        },
        {
          name: "Clara Wong",
          role: "Software Developer"
        },
        {
          name: "MD Nafieu Hossain Alif",
          role: "Software Developer"
        },
        {
          name: "Raj Rehman",
          role: "Software Developer"
        },
        {
          name: "Aarohan Batra",
          role: "Software Developer"
        },
        {
          name: "Sandhya Sasitharan",
          role: "Software Developer"
        }
      ],
      technologies: [
        {
          icon: "SiTypescript",
          name: "TypeScript"
        },
        {
          icon: "SiNextdotjs",
          name: "Next.js"
        },
        {
          icon: "SiSanity",
          name: "Sanity"
        },
        {
          icon: "SiFirebase",
          name: "Firebase"
        },
        {
          icon: "SiTailwindcss",
          name: "Tailwind CSS"
        },
        {
          icon: "SiFigma",
          name: "Figma"
        },
        {
          icon: "SiGithubactions",
          name: "GitHub Actions"
        },
        {
          icon: "SiVercel",
          name: "Vercel"
        },
        {
          icon: "SiJira",
          name: "Jira"
        },
        {
          icon: "SiJest",
          name: "Jest"
        },
        {
          icon: "SiTestinglibrary",
          name: "React Testing Library"
        }
      ]
    },
    highlights: {
      description: "Creating websites and applications to enhance the digital presence of the Google Developer Group.",
      items: [
        {
          asset: {
            alt: "GDSC Website",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fhighlights%2Fwebsite%2Fgdsc-website.mp4?alt=media&token=10253a9e-1dff-475b-838e-50b4d50be440",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fhighlights%2Fwebsite%2Fposter.png?alt=media&token=6bcf8a65-c55a-49bd-8b0f-ef94c3873c30"
          }
        },
        {
          asset: {
            alt: "Mac-a-thon Website",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fhighlights%2Fhackathon-website%2Fgdsc-hackathon-website.mp4?alt=media&token=f32e5432-401d-4c71-9515-3d936954b9f3",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fhighlights%2Fhackathon-website%2Fposter.png?alt=media&token=bcb69a3b-839c-41a9-8af3-c0c5ea7af73e"
          }
        },
        {
          asset: {
            alt: "Sanity CMS",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fhighlights%2Fsanity-cms.png?alt=media&token=2ebbb76b-9814-4305-a555-bbe0437ce731",
            type: "IMAGE"
          }
        },
      ]
    },
    links: [
      {
        icon: "FaGlobe",
        link: "https://gdscmcmasteru.ca",
        name: "Website"
      },
      {
        icon: "SiGithub",
        link: "https://github.com/DSC-McMaster-U",
        name: "GitHub"
      },
      {
        icon: "FaGlobe",
        link: "https://mac-a-thon.gdscmcmasteru.ca",
        name: "Mac-a-thon Website"
      },
    ]
  },
  {
    index: 6,
    id: "code-warriors",
    title: "CodeWarriors",
    association: "DeltaHacks IX",
    description: "A gamified platform for teaching coding.",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fcodewarriors%2Fcodewarriors-mockup.png?alt=media&token=5c09848e-0984-4188-9954-8dce2b4ea900",
      alt: "CodeWarriors Mockup"
    },
    color: "#ab6a8c",
    spotlight: false,
    startDate: new Date("2023-01-14T12:00:00Z"),
    endDate: new Date("2023-01-15T24:00:00Z"),
    overview: {
      description: "A gamified platform for teaching coding to new coders in a fun and interactive way. The platform is designed to be engaging and educational, with a focus on teaching coding concepts through interactive challenges and games.",
      role: {
        title: "Software Developer",
        description: "Designed and developed the platform"
      },
      team: [
        {
          name: "Luai Bashar",
          role: "Software Developer"
        }
      ],
      technologies: [
        {
          icon: "SiReact",
          name: "React"
        },
        {
          icon: "SiJavascript",
          name: "JavaScript"
        },
        {
          icon: "SiHtml5",
          name: "HTML5"
        },
        {
          icon: "SiTailwindcss",
          name: "Tailwind CSS"
        },
        {
          icon: "SiFigma",
          name: "Figma"
        }
      ]
    },
    highlights: {
      description: "The design of CodeWarriors is focused on making coding education fun and engaging for new coders.",
      items: [
        {
          asset: {
            alt: "Login Page",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fcodewarriors%2Fhighlights%2Fhome-page.jpg?alt=media&token=0ede822a-5894-411f-8331-e071d6a23fae",
            type: "IMAGE"
          }
        },
        {
          asset: {
            alt: "Language Selection",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fcodewarriors%2Fhighlights%2Flanguage-selection.jpg?alt=media&token=310ca593-4bd2-4faa-9d93-89f94a244f01",
            type: "IMAGE"
          }
        },
        {
          asset: {
            alt: "Language Overview",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fcodewarriors%2Fhighlights%2Fmission.jpg?alt=media&token=82b30198-2c2a-47ff-90f8-7ee36425af1f",
            type: "IMAGE"
          }
        },
        {
          asset: {
            alt: "Mission List",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fcodewarriors%2Fhighlights%2Fmission-list.jpg?alt=media&token=78fa70d5-1726-47cc-a654-a363840058a1",
            type: "IMAGE"
          }
        },
        {
          asset: {
            alt: "Mission",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fcodewarriors%2Fhighlights%2Fmission-active.jpg?alt=media&token=88e85461-b6ae-4c0b-b293-92fc5f85d546",
            type: "IMAGE"
          }
        }
      ]
    },
    links: [
      {
        icon: "SiDevpost",
        link: "https://devpost.com/software/code-warriors",
        name: "Devpost"
      }
    ]
  },
  {
    index: 3,
    id: "portfolio",
    title: "Portfolio",
    association: "Aidan Froggatt",
    description: "",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fportfolio%2Fportfolio-mockup.png?alt=media&token=120a6a5a-ea11-425f-9098-89389ad0526a",
      alt: "Portfolio Mockup"
    },
    color: "#ff5a5a",
    spotlight: false,
    startDate: new Date("2023-01-02"),
    overview: {
      description: "A little bit about myself; a brief overview of my projects, skills, and work. A strong emphasis placed on design and user experience.",
      role: {
        title: "Creator",
        description: "Everything :)"
      },
      team: [
        {
          name: "Me",
          role: "Architect"
        },
        {
          name: "Myself",
          role: "Designer"
        },
        {
          name: "I",
          role: "Developer"
        }
      ],
      technologies: [
        {
          icon: "SiRemix",
          name: "Remix"
        },
        {
          icon: "SiTypescript",
          name: "TypeScript"
        },
        {
          icon: "SiTailwindcss",
          name: "Tailwind CSS"
        },
        {
          icon: "SiFramer",
          name: "Framer"
        },
        {
          icon: "SiFirebase",
          name: "Firebase"
        },
        {
          icon: "SiAmazonwebservices",
          name: "AWS"
        },
        {
          icon: "SiVercel",
          name: "Vercel"
        },
        {
          icon: "SiVite",
          name: "Vite"
        },
        {
          icon: "SiFigma",
          name: "Figma"
        }
      ]
    },
    highlights: {
      description: "A showcase of my work, skills, and projects.",
      items: [
        {
          asset: {
            alt: "Hero Animation",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fportfolio%2Fhighlights%2Fhero-animation%2Fhero-animation.mp4?alt=media&token=7116c3fd-ff5a-44ab-8c86-93be08f76bf8",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fportfolio%2Fhighlights%2Fhero-animation%2Fposter.png?alt=media&token=56a707c7-121d-4b7b-88ac-7a0bb2a56ccb"
          }
        },
        {
          asset: {
            alt: "Custom Card",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fportfolio%2Fhighlights%2Fcustom-card.png?alt=media&token=f9301734-e044-43e8-84e7-40392be8fef7",
            type: "IMAGE"
          }
        },

      ]
    },
    links: [
      {
        icon: "SiGithub",
        link: "https://github.com/aidanfroggatt/portfolio",
        name: "GitHub"
      },
      {
        icon: "FaGlobe",
        link: "https://aidanfroggatt.com",
        name: "Website"
      }
    ]
  },
  {
    index: 7,
    id: "island-generator",
    title: "Island Generator",
    association: "McMaster University",
    description: "",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fisland-generator%2Fisland-generator-mockup.png?alt=media&token=542e46a9-0a17-4e65-9987-4fb494da63b2",
      alt: "Island Generator Mockup"
    },
    color: "#04538b",
    spotlight: false,
    startDate: new Date("2023-01-31"),
    endDate: new Date("2023-04-31"),
    overview: {
      description: "A Java application that generates islands using a variety of algorithms. The application allows users to customize the size, shape, and features of the generated islands.",
      role: {
        title: "Software Developer",
        description: "Developing features for the island generator."
      },
      team: [
        {
          name: "Krish Dogra",
          role: "Software Developer"
        },
        {
          name: "Ashwin Unnithan",
          role: "Software Developer"
        }
      ],
      technologies: [
        {
          icon: "FaJava",
          name: "Java"
        },
        {
          icon: "SiApachemaven",
          name: "Apache Maven"
        }
      ]
    },
    highlights: {
      description: "Visualizers for mesh data structure and applicable algorithms.",
      items: [
        {
          asset: {
            alt: "Mesh Data Structure",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fisland-generator%2Fhighlights%2Firregular_debug.svg?alt=media&token=868f4e29-654a-4646-bf54-eb53849996d1",
            type: "IMAGE"
          }
        },
        {
          asset: {
            alt: "Capital City Path",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fisland-generator%2Fhighlights%2Fcapital-city-path.svg?alt=media&token=24337224-d870-46be-b571-188ef201403e",
            type: "IMAGE"
          }
        },
        {
          asset: {
            alt: "Lagoon Island",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fisland-generator%2Fhighlights%2Fmesh-generator-sample.svg?alt=media&token=da9a7489-d3ce-4fac-93ba-bea8288e5649",
            type: "IMAGE"
          }
        },
      ]
    },
    links: [
      {
        icon: "SiGithub",
        name: "Github",
        link: "https://github.com/aidanfroggatt/IslandGenerator"
      }
    ]
  },
  {
    index: 8,
    id: "cotern",
    title: "Cotern",
    association: "Freelance",
    description: "",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fcotern%2Fcotern-mockup.png?alt=media&token=70d03dde-c2a1-4311-9a21-836660642c14",
      alt: "Cotern Mockup"
    },
    color: "#6366f1",
    spotlight: false,
    startDate: new Date("2024-02-08"),
    endDate: new Date("2024-03-17"),
    overview: {
      description: "A mobile platform for connecting students on co-op and internship terms. The platform allows students to connect with others on similar terms, share experiences, find reviews about opportunities, and build relationships",
      role: {
        title: "Software Developer and Designer",
        description: "Created a platform for connecting students on co-op and internship terms."
      },
      technologies: [
        {
          icon: "SiReact",
          name: "React Native"
        },
        {
          icon: "SiExpo",
          name: "Expo"
        },
        {
          icon: "SiJavascript",
          name: "JavaScript"
        },
        {
          icon: "SiFirebase",
          name: "Firebase"
        },
        {
          icon: "SiTailwindcss",
          name: "Tailwind CSS"
        },
        {
          icon: "SiJest",
          name: "Jest"
        },
        {
          icon: "SiTestinglibrary",
          name: "React Testing Library"
        }
      ]
    },
    highlights: {
      description: "A platform for connecting students on co-op and internship terms.",
      items: [
        {
          asset: {
            alt: "Authentication",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fcotern%2Fhighlights%2Fauthentication.png?alt=media&token=64f7f486-6acb-40b9-900d-92868bd96398",
            type: "IMAGE"
          }
        },
        {
          asset: {
            alt: "User Profile",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fcotern%2Fhighlights%2FIMG_5865.PNG?alt=media&token=392d19af-918f-4745-ab92-d0be70167aba",  
            type: "IMAGE"
          }
        }
      ]
    },
    links: [
      {
        icon: "SiGithub",
        link: "https://github.com/aidanfroggatt/cotern",
        name: "GitHub"
      }
    ]
  },
];
