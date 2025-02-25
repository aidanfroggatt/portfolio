export interface Work {
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
  asset: VideoAsset | ImageAsset;
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

export interface Content {
  type: string;
  title: string;
  subtitle: string;
  description: string;
  assets?: (ImageAsset | VideoAsset) [];
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
            alt: "Demo Video",
            src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fdemo-video%2Fburloak-insight-demo-video.mov?alt=media&token=c1339d96-b832-43f0-9e9f-4b7ba5211d1b",
            type: "VIDEO",
            poster: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fburloak-insight%2Fdemo-video%2Fburloak-insight-demo-video-poster.png?alt=media&token=b0c9e70a-5c8c-4247-befe-899e940fc72f"
          },
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
            alt: "Compelte Flowchart",
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
    navLink: "https://github.com/SE3A04-Project-Team/secure-chat-app"
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
    description: "Cross platform social networking app for connecting golfers.",
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
    // problem: {
    //   painPoints: "Many golfers struggle with: Finding playing partners outside of their usual group. Organizing matches and events without a centralized platform. Building a golfing network beyond in-person connections.",
    //   userNeeds: "Golfers need a way to: Connect with other golfers based on skill level, availability, and location. Organize and join games effortlessly. Track and share their golfing experiences.",
    //   marketGaps: "Existing golf apps focus on tee-time bookings or score tracking but lack a strong social networking aspect. Swingers Golf fills this gap by prioritizing community-building and engagement.",
    // },
    // ideation: {
    //   brainstorming: "I started by researching the golf community and existing solutions. Through surveys and discussions with golfers, I identified a need for a digital-first way to connect.",
    //   features: "I mapped out the core features: Profile Creation – Users can showcase their golfing experience. Matchmaking – Find golfers with similar skill levels nearby. Live Score Sharing – Share scores and track progress.",
    //   wireframes: "I created low-fidelity wireframes in Figma to visualize the user journey and iterate based on feedback."
    // },
    // design: {
    //   layout: "A clean, intuitive layout ensures easy navigation. The main tabs include: Home – Personalized feed with updates from the golfing community. Matches – Suggested playing partners based on skill and availability. Events – Browse and join local golf events. Profile – Track achievements and game history.",
    //   mockups: [
    //     {
    //       alt: "Landing Screen",
    //       src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2Fmockups%2Fswingers-landing-mockup.png?alt=media&token=bebbacff-81dc-46f0-a68a-7e9f77670cfa",
    //       type: "IMAGE"
    //     },
    //     {
    //       alt: "Rounds Screen",
    //       src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2Fmockups%2Fswingers-round-mockup.png?alt=media&token=fc51bea9-4a85-436d-a1bb-c86d196c68bf",
    //       type: "IMAGE"
    //     },
    //     {
    //       alt: "Round Details Screen",
    //       src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2Fmockups%2Fswingers-round-details-mockup.png?alt=media&token=66b557f6-4c4b-4815-a40f-606c5bb5e095",
    //       type: "IMAGE"
    //     },
    //     {
    //       alt: "Create Round Screen",
    //       src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2Fmockups%2Fswingers-create-round-mockup.png?alt=media&token=cf26a0f9-9f21-4c8e-b9d3-c16ea48c7a73",
    //       type: "IMAGE"
    //     },
    //     {
    //       alt: "Profile Screen",
    //       src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/projects%2Fswingers%2Fmockups%2Fswingers-profile-mockup.png?alt=media&token=97842eb4-68d7-4a08-a189-750f7f441551",
    //       type: "IMAGE"
    //     }
    //   ]
    // },
    // building: {
    //   stack: "Frontend: React Native (Expo) & TypeScript, Backend: Laravel (PHP) & MySQL, Real-time Communication: WebSockets",
    //   architecture: "Architecture blah blah blah ...",
    //   development: "Development blah blah blah ..."
    // },
    // testing: {
    //   internalTesting: "I ran early tests to identify performance bottlenecks and usability issues.",
    //   betaTesting: "Currently, OSU golf management students are testing the app. Their feedback helps refine the matchmaking and event organization features.",
    // },
    // status: {
    //   currentStatus: "The app is in beta testing with OSU golf management students. We're refining the matchmaking algorithm and event organization features based on their feedback.",
    //   nextSteps: "After beta testing, we plan to launch the app to the broader golfing community. We'll continue to iterate based on user feedback and expand to other golfing markets."
    // }
  },
  {
    id: "gdg",
    index: 1,
    title: "Google Developer Group",
    association: "McMaster University",
    description: "Enhancing digital presence and engagement on all platforms.",
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
    ],
    navLink: "https://gdscmcmasteru.ca",
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
  //   ]
  // },
];
