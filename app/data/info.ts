export interface about {
  type: string;
  src?: string;
  alt?: string;
  title?: string;
  text?: string;
}

export interface experience {
  company: string;
  companyWebsite: string;
  role: string;
  team: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface involvement {
  company: string;
  companyWebsite: string;
  role: string;
  team: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface award {
  title: string;
  association: string;
  link: string;
}

export const about: about[] = [
  // {
  //     type: 'image',
  //     src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/general_info%2Fimages%2Flake.JPG?alt=media&token=5fec35ba-2e93-4a6e-b006-f59c0bf6d4b0",
  //     alt: "Standing by Lake"
  // },
  {
    type: "image",
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/general_info%2Fimages%2Fprofile_picture.jpg?alt=media&token=60ec3fd2-fa19-49d2-8415-09de9b701b86",
    alt: "Aidan Froggatt Profile Picture",
  },
  {
    type: "text",
    title: `This is me — and what I've been up to recently.`,
    text: "",
  },
  {
    type: "image",
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/general_info%2Fimages%2Fhiking.jpg?alt=media&token=eb7f0b15-33f0-4138-823e-f1769fc541e7",
    alt: "Aidan Hiking",
  },
  {
    type: "text",
    title: "My Education.",
    text: "In May 2026, I am set to graduate from Software Engineering at McMaster University.",
  },
  {
    type: "image",
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/general_info%2Fimages%2Fcliff.jpg?alt=media&token=5791eb59-2646-4b5f-8afc-ad5638780484",
    alt: "Cliff Image",
  },
  {
    type: "text",
    title: "Why software?",
    text: `From building Lego to assembling IKEA furniture, I've always enjoyed building things. My passion evolved when I discovered coding in university. After taking several courses and winning multiple hackathons, I knew I wanted a career in software.`,
  },
  {
    type: "image",
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/general_info%2Fimages%2Fconcert.jpg?alt=media&token=d1b20b09-623a-491e-828b-a4fb7c00e48d",
    alt: "Concert Image",
  },
  {
    type: "text",
    title: "In my free time,",
    text: `I love to explore the outdoors and attend local concerts. Whether it's hiking, kayaking, or listening to live music, I am always looking for new experiences and adventures.`,
  },
  {
    type: "image",
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-aidan-froggatt.appspot.com/o/general_info%2Fimages%2Fhiking_backpack.jpg?alt=media&token=52968973-f5e2-4b58-bced-080799bc1a9a",
    alt: "Hiking Backpack Image",
  },
  {
    type: "text",
    title: "Thanks for visitng!",
    text: "Feel free to reach out.",
  },
];

export const experience: experience[] = [
  {
    company: "Tesla",
    companyWebsite: "https://www.tesla.com/about",
    role: "Software Engineer Intern",
    team: "Design Automation Software",
    startDate: "05/'25",
    endDate: "08/'25",
    description: "Having some fun making useful tools.",
  },
  {
    company: "IBM",
    companyWebsite: "https://www.ibm.com/products/watsonx-orchestrate",
    role: "Software Engineer Intern",
    team: "Human Centric Processing",
    startDate: "05/'24",
    endDate: "04/'25",
    description:
      "Building watsonx Orchestrate and Business Automation Workflow.",
  },
  {
    company: "Burloak Technologies",
    companyWebsite: "https://www.burloaktech.com/",
    role: "Software Engineer Intern",
    team: "Burloak Insight",
    startDate: "05/'23",
    endDate: "06/'23",
    description:
      "Architected and created an internal company platform for data entry, data analysis, report generation, and guiding engineering decisions.",
  },
  {
    company: "Universole Fit",
    companyWebsite: "https://www.universolefit.com/",
    role: "Frontend Developer",
    team: "Core Product",
    startDate: "03/'23",
    endDate: "05/'23",
    description:
      "Developed Shopify theme app extension and plugin to help launch startup.",
  },
];

export const involvement: involvement[] = [
  {
    company: "Google Developer Group",
    companyWebsite:
      "https://gdg.community.dev/gdg-on-campus-mcmaster-university-hamilton-canada/",
    role: "Team Lead",
    team: "Web Development",
    startDate: "05/'24",
    endDate: "Present",
    description:
      "Enhancing digital presence and engagement through design and development.",
  },
];

export const awards: award[] = [
  {
    title: "Best Environmental Hack",
    association: "MacHacks 3",
    link: "https://devpost.com/software/snapcycle-hyx3qv",
  },
  {
    title: "Best Overall Hack",
    association: "DeltaHacks IX",
    link: "https://devpost.com/software/code-warriors",
  },
];
