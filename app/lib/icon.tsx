import { IconType } from 'react-icons';
import { FaJava, FaSass } from 'react-icons/fa';
import { FiCode, FiGitBranch, FiGlobe, FiTerminal } from 'react-icons/fi';
import {
  SiAmazonroute53,
  SiAmazons3,
  SiApache,
  SiBox,
  SiCloudinary,
  SiCss3,
  SiDevpost,
  SiDigitalocean,
  SiDocker,
  SiDrizzle,
  SiEclipseide,
  SiEslint,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiFramer,
  SiGithub,
  SiGithubactions,
  SiGooglechrome,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiJfrog,
  SiJira,
  SiJunit5,
  SiLaravel,
  SiLinkedin,
  SiMdx,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPnpm,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedux,
  SiRemix,
  SiSanity,
  SiSelenium,
  SiShadcnui,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiVite,
  SiWebpack,
} from 'react-icons/si';

/**
 * TECHNOLOGY MAPPING
 */
const TECH_ICONS: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  HTML: SiHtml5,
  CSS: SiCss3,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'Tailwind CSS': SiTailwindcss,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  Drizzle: SiDrizzle,
  Neon: SiPostgresql,
  Vercel: SiVercel,
  'GitHub Actions': SiGithubactions,
  Figma: SiFigma,
  Laravel: SiLaravel,
  TailwindCSS: SiTailwindcss,
  Remix: SiRemix,
  Expo: SiExpo,
  PHP: SiPhp,
  'Digital Ocean': SiDigitalocean,
  Jira: SiJira,
  'React Native': SiReact,
  'Amazon Route 53': SiAmazonroute53,
  Turborepo: SiTurborepo,
  Framer: SiFramer,
  Box: SiBox,
  ESLint: SiEslint,
  JUnit: SiJunit5,
  Selenium: SiSelenium,
  Jenkins: SiJenkins,
  JFrog: SiJfrog,
  Ubuntu: SiUbuntu,
  GitHub: SiGithub,
  Docker: SiDocker,
  Webpack: SiWebpack,
  SCSS: FaSass,
  Redux: SiRedux,
  Java: FaJava,
  'Chrome Web Driver': SiGooglechrome,
  Eclipse: SiEclipseide,
  'IBM Rational Team Concert': FiGitBranch,
  Shadcn: SiShadcnui,
  PNPM: SiPnpm,
  Sanity: SiSanity,
  Nginx: SiNginx,
  'Batch Scripts': FiTerminal,
  Flask: SiFlask,
  HTML5: SiHtml5,
  Vite: SiVite,
  Cloudinary: SiCloudinary,
  MDX: SiMdx,
  PyTorch: SiPytorch,
  Apache: SiApache,
  'Amazon S3': SiAmazons3,
};

/**
 * LINK MAPPING
 */
const PLATFORM_ICONS: Record<string, IconType> = {
  GitHub: SiGithub,
  LinkedIn: SiLinkedin,
  Website: FiGlobe,
  Devpost: SiDevpost,
};

const SORTED_TECH_KEYS = Object.keys(TECH_ICONS).sort((a, b) => b.length - a.length);
const SORTED_PLATFORM_KEYS = Object.keys(PLATFORM_ICONS).sort((a, b) => b.length - a.length);

/**
 * Helper: Finds an icon by checking if any key in the map exists within the name string.
 */
const findIconByKeyword = (
  name: string,
  map: Record<string, IconType>,
  sortedKeys: string[],
  defaultIcon: IconType
): IconType => {
  if (map[name]) {
    return map[name];
  }

  const lowerName = name.toLowerCase();

  for (const key of sortedKeys) {
    if (lowerName.includes(key.toLowerCase())) {
      return map[key];
    }
  }

  return defaultIcon;
};

export const getTechIcon = (name: string): IconType => {
  return findIconByKeyword(name, TECH_ICONS, SORTED_TECH_KEYS, FiCode);
};

export const getLinkIcon = (name: string): IconType => {
  return findIconByKeyword(name, PLATFORM_ICONS, SORTED_PLATFORM_KEYS, FiGlobe);
};
