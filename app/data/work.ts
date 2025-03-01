export interface Work {
  index: number;
  id: string;
  title: string;
  subtitle?: string;
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
  content?: Content[];
  links?: Link[];
  navLink: string;
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

export interface HighlightItem {
  asset: VideoAsset | ImageAsset | PDFAsset;
}

export interface ImageAsset {
  alt: string;
  src: string;
  type: "IMAGE";
}

export interface VideoAsset {
  alt: string;
  src: string;
  type: "VIDEO";
  poster: string; // Required for VIDEO type
}

export interface PDFAsset {
  src: string;
  alt: string;
  type: "PDF"
}

export interface Content {
  type: string;
  title: string;
  subtitle: string;
  description: string;
  assets?: (ImageAsset | VideoAsset | PDFAsset) [];
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
    subtitle: "Data analytics and report generation platform for additive manufacturing.",
    description: "Burloak Insight is a powerful data analytics and report generation platform designed for additive manufacturing. By integrating PDF scrapers, a centralized database, and dynamic dashboards, it automates data access and analysis, enhancing operational efficiency and driving data-driven engineering decisions at Burloak Technologies.",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2FOneDeviceMockup.png?alt=media&token=f330367d-4854-46b7-b62c-756dfec51f55",
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
        description: "Architecture, stack selection, development, and testing."
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
            alt: "Architecture Overview",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Farchitecture-overview%2Fburloak-insight-architecture-overview.svg?alt=media&token=09729ff1-b549-4e78-a1fc-fceac1484c84",
            type: "IMAGE"
          },
        },
        {
          asset: {
            alt: "Manager Recommendation",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Frecommendation%2Feric-tenuta-recommendation.png?alt=media&token=8a52a2d7-cad1-447d-b3a6-3237b2dadc25",
            type: "IMAGE"
          }
        },
      ]
    },
    content: [
      {
        type: "CONTEXT",
        title: "An opportunity to improve company operations.",
        subtitle: "A need for automation and consolidation was evident",
        description: "Data access, storage, analsysis, and report generation were fragmented processes. I centralized these tasks, enhancing operational efficiency and informing engineering decisions.",
      },
      {
        type: "DATA ENTRY",
        title: "Data entry was entirely manual.",
        subtitle: "A time-consuming and error-prone process, wasting engineering hours.",
        description: "I automated data entry, increasing speed by over 200x, entering 500+ pdfs of secure data, and centralizing 30+ data stores.",
        assets: [
          {
            alt: "Simple Flowchart",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fdatabase_video%2Fburloak-insight-data-entry-simple-diagram.png?alt=media&token=1eb98b87-1ef0-42e7-880e-1d5b33225e47",
            type: "IMAGE",
          },
          {
            alt: "Complete Flowchart",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fdatabase_video%2Fburloak-insight-data-entry-complete-diagram.png?alt=media&token=e67056a4-604d-44cf-9430-e1a38fb914e1",
            type: "IMAGE",
          },
          {
            alt: "Raw Data Dashboard",
              src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fdatabase_video%2Fburloak_insight_database_video.mp4?alt=media&token=95786266-73ca-4d74-b5cf-70cb3f157fe1",
              type: "VIDEO",
              poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fdatabase_video%2Fposter.png?alt=media&token=a4fea23f-ffd6-4275-a2d0-f5025c77200b"
          },

        ]
      },
      {
        type: "DATA ANALYSIS",
        title: "Data analysis was not happening.",
        subtitle: "Without analysis, engineering decisions were not data-driven.",
        description: "I implemented a data analysis dashboard to analyze data, enabling informed engineering decisions.",
        assets: [
          {
            alt: "Data Analysis Dashboard",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fdata_analysis_video%2Fburloak_insight_data_analysis_video.mp4?alt=media&token=d551b535-3f33-4ca0-9e66-ad9252251dec",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fdata_analysis_video%2Fposter.png?alt=media&token=296c9f1a-c8d1-4209-bf21-9e46ffe1db53"
          },
        ]
      },
      {
        type: "REPORT GENERATION",
        title: "Reports generation was done by hand.",
        subtitle: "This manual process was time-consuming and error-prone.",
        description: "I automated report generation, continuing to generate reports in seconds, saving engineering hours and reducing errors.",
        assets: [
          {
            alt: "Report Generation Dashboard",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Freport_generation_video%2Fburloak_insight_report_generation_video.mp4?alt=media&token=a0811749-bba1-4651-9503-6303612acb52",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Freport_generation_video%2Fposter.png?alt=media&token=c9ba4891-d23d-4fc7-850f-a99b3a8bd610"
          }
        ]
      },
      {
        type: "MACHINE VERIFICATION",
        title: "Machine verification was a reactive process.",
        subtitle: "Only after a machine failed was maintenance performed.",
        description: "I implemented a machine verification dashboard to monitor and predict maintenance needs. This proactive approach reduced downtime.",
        assets: [
          {
            type: "VIDEO",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fmachine-verification-dashboard%2Fburloak-insight-machine-verification-dashboard.mp4?alt=media&token=9fc8b82a-8b17-49fd-b9ac-ccec66431a7a",
            alt: "Machine Verification Dashboard",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fmachine-verification-dashboard%2Fburloak-insight-machine-verification-dashboard-poster.png?alt=media&token=f10a9f10-4bad-4064-8bb6-6ba9bd4845de"
          }
        ]
      },
      {
        type: "RETROSPECTIVE",
        title: "A great experience with many lessons learned.",
        subtitle: "Tangible results and valuable insights, but always room for improvement",
        description: "Increasing data entry speed by over 200x, entering 500+ pdfs of secure data, centralizing 30+ data stores, and continuing to generate reports in seconds.",
      },
    ],
    navLink: "https://www.burloaktech.com/"
  },
  {
    id: "secure-chat-app",
    index: 4,
    title: "Secure Chat App",
    association: "McMaster University",
    subtitle: "Kerberos authentication, AES encryption, and real-time chat.",
    description: "A secure chat application featuring Kerberos authentication and AES encryption for real-time, protected messaging. Built with React Native, Firebase, Python, and Flask, this app ensures a robust and encrypted communication experience.",
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
        },
        {
          name: "Edward Gao",
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
    content: [
      {
        type: "Deliverable 1",
        title: "Software Requirement Specification",
        subtitle: "A cross platform secure chat application.",
        description: "An outline of the purpose, product description, use case diagram, functional, and non functional requirements.",
        assets: [
          {
            type: "PDF",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsecure-chat-app%2Fdeliverables%2FSoftware_Requirement_Specification_D1.pdf?alt=media&token=a123fe2a-f9fe-40fc-ace5-0bb258fd8298",
            alt: "Software Requirement Specification Report",
          }
        ]
      },
      {
        type: "Deliverable 2",
        title: "High Level Architecture",
        subtitle: "Enabling encrypted communitcation for sensitive information.",
        description: "Analysis class diagram, architectural design and rationale behind design decisions, and class responsibility collaboration cards detailing class responsibilities and interactions.",
        assets: [
          {
            type: "PDF",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsecure-chat-app%2Fdeliverables%2FHigh_Level_Architecture_D2.pdf?alt=media&token=021b639e-a8c1-4f05-8baa-ba7632c6b2fc",
            alt: "High Level Architecture Report",
          }
        ]
      },
      {
        type: "Deliverable 3",
        title: "Detailed Architecture",
        subtitle: "PAC architecture with repository sub-system.",
        description: "Furthering the definition of the architecture through state chart diagrams, sequence diagrams, and a detailed class diagram.",
        assets: [
          {
            type: "PDF",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fsecure-chat-app%2Fdeliverables%2FDetailed_Architecture_D3.pdf?alt=media&token=1298e687-70e1-4544-9da0-dee27cebd602",
            alt: "Detailed Architecture Report",
          }
        ]
      },
      {
        type: "Retrospective",
        title: "A successful project with valuable insights.",
        subtitle: "A secure chat app with Kerberos authentication and AES encryption.",
        description: "The secure chat app was a success, providing valuable insights into secure chat applications and encryption.",
      }
    ],
    links: [
      {
        icon: "SiGithub",
        link: "https://github.com/SE3A04-Project-Team/secure-chat-app",
        name: "GitHub"
      },
    ],
    navLink: "https://github.com/SE3A04-Project-Team/secure-chat-app"
  },
  {
    id: "snapcycle",
    index: 5,
    title: "SnapCycle",
    association: "MacHacks 3",
    subtitle: "Award winning AI-powered recyclability detection app.",
    description: "SnapCycle is an award-winning AI-powered web app that instantly assesses the recyclability of items, providing users with clear, actionable disposal instructions. Built with React, Python, and PyTorch, it simplifies environmental impact awareness.",
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
        description: "Ideation, design, and development."
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
    navLink: "https://devpost.com/software/snapcycle-hyx3qv",
  },
  {
    id: "swingers-golf",
    index: 0,
    title: "Swingers Golf",
    association: "Links Connect Inc.",
    subtitle: "Cross platform social networking app for connecting golfers.",
    description: "Swingers Golf is a cross-platform social networking app designed to connect golfers, making it easier to find like-minded players and improve their golfing experience. Built with React Native and TypeScript, it is the perfect platform to enhance your game.",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2FTwoDeviceMockup.png?alt=media&token=968b2e35-f2d7-4ae5-84ef-a4f903589a1e",
      alt: "Swingers Golf Mockup",
    },
    color: "#07663B",
    spotlight: true,
    startDate: new Date("2024-06-01"),
    overview: {
      description: "A cross-platform golf social networking app that connects golfers improving their golfing experience. The platform allows for golfers with similar interests to connect and golf together.",
      role: {
        title: "Co-Founder and CTO",
        description: "Architecture, design, development, testing, and deployment."
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
          icon: "SiAmazons3",
          name: "Amazon S3"
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
          icon: "SiAmazonroute53",
          name: "Amazon Route 53"
        },
        {
          icon: "SiDigitalocean",
          name: "Digital Ocean"
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
            alt: "Round Management",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2Fhighlights%2Fmobile-user-interface%2Fswingers-three-screen-mockup.png?alt=media&token=9be9e2f3-d2bb-4762-871e-a48418f5ca23",
            type: "IMAGE"
          }
        },
        // {
        //   asset: {
        //     alt: "Realtime Messaging",
        //     src: "",
        //     poster: "",
        //     type: "VIDEO"
        //   }
        // },
        {
          asset: {
            alt: "User Flow",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2Fhighlights%2Fuser-flow%2Fswingers-user-flow.png?alt=media&token=90024556-e009-4cd8-8af6-1d54123b5848",
            type: "IMAGE"
          }
        },
      ]
    },
    links: [
      {
        icon: "SiGithub",
        link: "https://github.com/swingersgolf",
        name: "GitHub"
      },
      {
        icon: "FaGlobe",
        link: "https://swingersgolfapp.com/",
        name: "Website"
      },
    ],
    navLink: "https://swingersgolfapp.com/",
    content: [
      {
        type: "CONTEXT",
        title: "An opportunity to make our game better.",
        subtitle: "The dissatisfaction is clear",
        description: "Creating a way for golfers to find like-minded individuals to play with has been long overdue.",
        assets: [
          {
            alt: "Community Requests",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2Fhighlights%2Fcommunity-requests%2Fswingers-community-requests.png?alt=media&token=7e4853c4-fee6-473f-aaac-80e50a49b8fc",
            type: "IMAGE"
          }
        ]
      }
    ],
  },
  {
    id: "gdg",
    index: 1,
    title: "Google Developer Group",
    association: "McMaster University",
    subtitle: "Enhancing digital presence and engagement on all platforms.",
    description: "Led the design and development of the Google Developer Group at McMaster University's digital presence. Enhanced engagement and visibility across all platforms with websites, rebranding, and a successful annual hackathon, Mac-a-thon.",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2FThreeDeviceMockup.png?alt=media&token=721ae497-1052-4088-b747-98556f4d71fc",
      alt: "GDG Icon"
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
          name: "Willie Pai",
          role: "Software Developer"
        },
        {
          name: "Joseph Maltese",
          role: "Software Developer"
        },
        {
          name: "Ameya Gupta",
          role: "Web Designer"
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
          icon: "SiFramer",
          name: "Framer Motion",
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
            alt: "Google Developer Group Website",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fhighlights%2Fwebsite%2Fgdg-website.mp4?alt=media&token=785927fe-7203-4c09-8900-aa677616c7b4",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fhighlights%2Fwebsite%2Fposter.jpg?alt=media&token=4e6629ec-e3cb-48c5-b06e-982d6ada1aeb"
          }
        },
        {
          asset: {
            alt: "Mac-a-thon Website",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fhighlights%2Fhackathon-website%2Fmac-a-thon-website.mp4?alt=media&token=81db8fe5-1362-4277-a911-0aa29036b0b8",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fhighlights%2Fhackathon-website%2Fposter.jpg?alt=media&token=907d4fac-1eb5-4e6e-bfc2-fd21c68f789d"
          }
        },
      ]
    },
    content: [
      {
        type: "CONTEXT",
        title: "A complete club exposure overhaul.",
        subtitle: "Rebranding, expanding, and enhancing the digital presence",
        description: "Google Developer Group rebranded to Google Developer Group on Campus. Our chapter further expanded to include an annual hackathon that required a digital presence.",
      },
      {
        type: "DESIGN",
        title: "Designing for engagement.",
        subtitle: "Creating websites that engage and inform",
        description: "Designed websites that engaged users and informed them about the Google Developer Group on Campus and our annual hackathon, Mac-a-thon.",
        assets: [
          {
            alt: "Card Components",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fdesign%2Fgdg-cards.svg?alt=media&token=d2a68992-38fe-4d23-ba3f-56cb912860e7",
            type: "IMAGE",
          },
          {
            alt: "Navbar Components",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fdesign%2Fgdg-navbars.svg?alt=media&token=abc36eee-9c62-4c20-914f-1525d3fecdee",
            type: "IMAGE",
          }
        ]
      },
      {
        type: "REBRAND",
        title: "A new name, a new chapter.",
        subtitle: "Google Developer Group on Campus",
        description: "The Google Developer Group rebranded to Google Developer Group on Campus to better reflect our focus on student engagement and learning.",
        assets: [
          {
            alt: "Google Developer Group on Campus Globe",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Frebrand%2Fgdg-globe.mp4?alt=media&token=3ed2fcbc-10cc-487a-9b68-33d575a804f1",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Frebrand%2Fposter.jpg?alt=media&token=2b472efd-8a33-4523-a52b-1c985f1dc1f6",
          }
        ]
      },
      {
        type: "HACKATHON",
        title: "Mac-a-thon",
        subtitle: "Our first annual AI hackathon",
        description: "We hosted our first annual AI hackathon, Mac-a-thon, to engage students and foster a community of learning and innovation.",
        assets: [
          {
            alt: "Mac-a-thon Banner",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fgdsc%2Fmac-a-thon%2Fgdg-mac-a-thon-banner.webp?alt=media&token=17840953-c3e6-42ec-9f99-a81c824cdfa2",
            type: "IMAGE",
          }
        ],
      },
      {
        type: "NEWSLETTER",
        title: "Informing our community.",
        subtitle: "Our first year delivering a monthly newsletter",
        description: "We launched a monthly newsletter to inform our community about the latest and greatest in the tech industry.",
      },
      {
        type: "RETROSPECTIVE",
        title: "A successful year of growth.",
        subtitle: "Enhanced engagement and visibility",
        description: "Our rebranding and expansion efforts have led to increased engagement and visibility for the Google Developer Group on Campus. Our community has grown to over 2000 members across all platforms.",
      }
    ],
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
    ],
    navLink: "https://gdscmcmasteru.ca",
  },
  {
    index: 6,
    id: "code-warriors",
    title: "CodeWarriors",
    association: "DeltaHacks IX",
    subtitle: "A gamified platform for teaching coding.",
    description: "CodeWarriors is a gamified platform designed to teach coding through fun and interactive challenges. Developed for new coders, it makes learning programming concepts engaging and accessible.",
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
        description: "Designed and developed the platform."
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
    ],
    navLink: "https://devpost.com/software/code-warriors"
  },
  {
    index: 3,
    id: "portfolio",
    title: "Portfolio",
    subtitle: "",
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
    ],
    navLink: "https://aidanfroggatt.com"
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
    ],
    navLink: "https://github.com/aidanfroggatt/IslandGenerator"
  },
  // {
  //   index: 8,
  //   id: "cotern",
  //   title: "Cotern",
  //   association: "Freelance",
  //   description: "",
  //   image: {
  //     src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fcotern%2Fcotern-mockup.png?alt=media&token=70d03dde-c2a1-4311-9a21-836660642c14",
  //     alt: "Cotern Mockup"
  //   },
  //   color: "#6366f1",
  //   spotlight: false,
  //   startDate: new Date("2024-02-08"),
  //   endDate: new Date("2024-03-17"),
  //   overview: {
  //     description: "A mobile platform for connecting students on co-op and internship terms. The platform allows students to connect with others on similar terms, share experiences, find reviews about opportunities, and build relationships",
  //     role: {
  //       title: "Software Developer and Designer",
  //       description: "Created a platform for connecting students on co-op and internship terms."
  //     },
  //     technologies: [
  //       {
  //         icon: "SiReact",
  //         name: "React Native"
  //       },
  //       {
  //         icon: "SiExpo",
  //         name: "Expo"
  //       },
  //       {
  //         icon: "SiJavascript",
  //         name: "JavaScript"
  //       },
  //       {
  //         icon: "SiFirebase",
  //         name: "Firebase"
  //       },
  //       {
  //         icon: "SiTailwindcss",
  //         name: "Tailwind CSS"
  //       },
  //       {
  //         icon: "SiJest",
  //         name: "Jest"
  //       },
  //       {
  //         icon: "SiTestinglibrary",
  //         name: "React Testing Library"
  //       }
  //     ]
  //   },
  //   highlights: {
  //     description: "A platform for connecting students on co-op and internship terms.",
  //     items: [
  //       {
  //         asset: {
  //           alt: "Authentication",
  //           src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fcotern%2Fhighlights%2Fauthentication.png?alt=media&token=64f7f486-6acb-40b9-900d-92868bd96398",
  //           type: "IMAGE"
  //         }
  //       },
  //       {
  //         asset: {
  //           alt: "User Profile",
  //           src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fcotern%2Fhighlights%2FIMG_5865.PNG?alt=media&token=392d19af-918f-4745-ab92-d0be70167aba",
  //           type: "IMAGE"
  //         }
  //       }
  //     ]
  //   },
  //   links: [
  //     {
  //       icon: "SiGithub",
  //       link: "https://github.com/aidanfroggatt/cotern",
  //       name: "GitHub"
  //     }
  //   ],
  //   navLink: "https://github.com/aidanfroggatt/cotern"
  // },
  {
    index: 8,
    id: "acme-run",
    title: "ACME Run",
    association: "McMaster University",
    description: "ACME Run is a gamified fitness platform combining curated running trails and heart rate monitoring to provide a dynamic fitness experience. Designed for North American users, it promotes community engagement and user safety through local partnerships. The project focuses on requirements engineering and system architecture, with a vision to make fitness more accessible and enjoyable.",
    image: {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Facme-run%2Facme-run-index-mockup.png?alt=media&token=02444408-c982-49e7-ab0f-61a8f7fd45dd",
      alt: "ACME Run Mockup"
    },
    color: "#7A003C",
    spotlight: false,
    startDate: new Date('2023-09-07'),
    endDate: new Date('2023-12-06'),
    overview: {
      description: "ACME Run aims to address the unmet need for an engaging fitness solution in North America. It combines gamified workouts with curated running trails and heart rate monitoring to create a dynamic fitness experience, while fostering community engagement and user safety through local partnerships like McMaster.",
      role: {
        title: "Architect",
        description: "Project planning, architecture, requirements engineering."
      },
      team: [
        {
          name: "Monica Bazina-Grolinger",
          role: "Architect"
        },
        {
          name: "Kate Min",
          role: "Architect"
        }
      ],
      technologies: [
        {
          icon: "SiAsciidoctor",
          name: "Asciidoctor"
        },
        {
          icon: "SiUml",
          name: "UML"
        }
      ]
    },
    highlights: {
      description: "Requirements engineering for a dynamic fitness solution.",
      items: [
        {
          asset: {
            alt: "Project Report",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Facme-run%2Findex.pdf?alt=media&token=349699e4-ac09-4072-8193-38810e926140",
            type: "PDF"
          }
        }
      ]
    },
    content: [
      {
        type: "CONTEXT",
        title: "A need for a dynamic fitness solution.",
        subtitle: "Reimagining fitness in North America",
        description: "ACME Run aims to address the unmet need for an engaging fitness solution in North America. The platform combines gamified workouts with curated running trails and heart rate monitoring to create a dynamic fitness experience.",
      },
      {
        type: "GOALS",
        title: "Making fitness more accessible.",
        subtitle: "Creating a dynamic and enjoyable fitness experience for all",
        description: "ACME RUN is a gamified fitness app offering personalized workouts through curated trails and heart rate monitoring, aiming to make fitness more accessible, enjoyable, and community-focused.",
        assets: [
          {
            alt: "High Level Use Case Diagram",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Facme-run%2Fdiagrams%2Fuse-case-diagram.svg?alt=media&token=1b318af1-e61b-4180-b186-ab9558dce7bf",
            type: "IMAGE"
          }
        ]
      },
      {
        type: "ENVIRONMENT",
        title: "Domain in focus.",
        subtitle: "Understanding the fitness ecosystem and user needs",
        description: "Defining the components, constraints, assumptions, effects, and invariants of the ACME Run domain to understand the fitness ecosystem and user needs.",
        assets: [
          {
            alt: "Domain Model",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Facme-run%2Fdiagrams%2Fdomain-model.svg?alt=media&token=a40b887d-3fed-40b7-8ec3-6407ffbea9ee",
            type: "IMAGE"
          }
        ]
      },
      {
        type: "SYSTEM",
        title: "Constructing the architecture.",
        subtitle: "The components required to create a dynamic fitness solution",
        description: "Illustrating the components, functionality, interfaces, usage scenarios, and prioritization of the ACME Run system.",
        assets: [
          {
            alt: "Components Model",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Facme-run%2Fdiagrams%2Fcomponents-model.svg?alt=media&token=740db715-7d70-4ea3-9e84-6009e0eefd75",
            type: "IMAGE"
          },
          {
            alt: "API Diagram",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Facme-run%2Fdiagrams%2Fapi-diagram.svg?alt=media&token=51eca081-ecff-4919-b842-dbae48802afd",
            type: "IMAGE"
          },
          {
            alt: "Activity Update Diagram",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Facme-run%2Fdiagrams%2Factivity-update-diagram.svg?alt=media&token=0bda1243-73d2-4361-ad7e-615b942746d2",
            type: "IMAGE"
          },
          {
            alt: "Activity Run Diagram",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Facme-run%2Fdiagrams%2Factivity-run-diagram.svg?alt=media&token=718ad6cc-f640-4694-92ae-df3101ecbad8",
            type: "IMAGE"
          }
        ]
      }, 
      {
        type: "RETROSPECTIVE",
        title: "A learning experience in requirements engineering.",
        subtitle: "The importance and impact of requirements engineering",
        description: "ACME Run was a valuable learning experience in requirements engineering. The project required a deep understanding of user needs and system requirements to create a successful fitness solution.",
      }
    ],
    navLink: ""
  }
];
