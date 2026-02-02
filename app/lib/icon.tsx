import { IconType } from 'react-icons';
import { FiCode, FiGlobe, FiTerminal } from 'react-icons/fi';
import {
  SiAmazons3,
  SiApache,
  SiBox,
  SiDevpost,
  SiGithub,
  SiJenkins,
  SiJfrog,
  SiJira,
  SiJunit5,
  SiLatex,
  SiLinkedin,
  SiMdx,
  SiPytorch,
  SiSelenium,
  SiWebpack,
} from 'react-icons/si';
import { BetterAuthDark } from '~/components/ui/svgs/betterAuthDark';
import { Chromium } from '~/components/ui/svgs/chromium';
import { Cloudinary } from '~/components/ui/svgs/cloudinary';
import { CssOld } from '~/components/ui/svgs/cssOld';
import { Digitalocean } from '~/components/ui/svgs/digitalocean';
import { Docker } from '~/components/ui/svgs/docker';
import { DrizzleOrmDark } from '~/components/ui/svgs/drizzleOrmDark';
import { Eclipse } from '~/components/ui/svgs/eclipse';
import { EslintIconDark } from '~/components/ui/svgs/eslintIconDark';
import { Expo } from '~/components/ui/svgs/expo';
import { ExpressjsDark } from '~/components/ui/svgs/expressjsDark';
import { Figma } from '~/components/ui/svgs/figma';
import { Firebase } from '~/components/ui/svgs/firebase';
import { FlaskDark } from '~/components/ui/svgs/flaskDark';
import { FramerDark } from '~/components/ui/svgs/framerDark';
import { GithubDark } from '~/components/ui/svgs/githubDark';
import { Hono } from '~/components/ui/svgs/hono';
import { Html5 } from '~/components/ui/svgs/html5';
import { Ibm } from '~/components/ui/svgs/ibm';
import { Java } from '~/components/ui/svgs/java';
import { Javascript } from '~/components/ui/svgs/javascript';
import { Laravel } from '~/components/ui/svgs/laravel';
import { MysqlIconDark } from '~/components/ui/svgs/mysqlIconDark';
import { Neon } from '~/components/ui/svgs/neon';
import { NextjsIconDark } from '~/components/ui/svgs/nextjsIconDark';
import { Nginx } from '~/components/ui/svgs/nginx';
import { Nodejs } from '~/components/ui/svgs/nodejs';
import { PhpDark } from '~/components/ui/svgs/phpDark';
import { PnpmDark } from '~/components/ui/svgs/pnpmDark';
import { Postgresql } from '~/components/ui/svgs/postgresql';
import { Python } from '~/components/ui/svgs/python';
import { ReactDark } from '~/components/ui/svgs/reactDark';
import { Redux } from '~/components/ui/svgs/redux';
import { RemixDark } from '~/components/ui/svgs/remixDark';
import { SanityDark } from '~/components/ui/svgs/sanityDark';
import { Sass } from '~/components/ui/svgs/sass';
import { ShadcnUiDark } from '~/components/ui/svgs/shadcnUiDark';
import { Tailwindcss } from '~/components/ui/svgs/tailwindcss';
import { Trpc } from '~/components/ui/svgs/trpc';
import { TurborepoIconDark } from '~/components/ui/svgs/turborepoIconDark';
import { Typescript } from '~/components/ui/svgs/typescript';
import { Ubuntu } from '~/components/ui/svgs/ubuntu';
import { VercelDark } from '~/components/ui/svgs/vercelDark';
import { Vite } from '~/components/ui/svgs/vite';
import { Vitest } from '~/components/ui/svgs/vitest';

/**
 * TECHNOLOGY MAPPING
 */
const TECH_ICONS: Record<string, IconType> = {
  JavaScript: Javascript,
  TypeScript: Typescript,
  Python: Python,
  CSS: CssOld,
  React: ReactDark,
  'Next.js': NextjsIconDark,
  'Node.js': Nodejs,
  'Express.js': ExpressjsDark,
  'Tailwind CSS': Tailwindcss,
  MySQL: MysqlIconDark,
  PostgreSQL: Postgresql,
  Firebase: Firebase,
  Drizzle: DrizzleOrmDark,
  Neon: Neon,
  Vercel: VercelDark,
  Figma: Figma,
  Laravel: Laravel,
  TailwindCSS: Tailwindcss,
  Remix: RemixDark,
  Expo: Expo,
  PHP: PhpDark,
  'Digital Ocean': Digitalocean,
  Jira: SiJira,
  'React Native': ReactDark,
  Turborepo: TurborepoIconDark,
  Framer: FramerDark,
  Box: SiBox,
  ESLint: EslintIconDark,
  JUnit: SiJunit5,
  Selenium: SiSelenium,
  Jenkins: SiJenkins,
  JFrog: SiJfrog,
  Ubuntu: Ubuntu,
  GitHub: GithubDark,
  Docker: Docker,
  Webpack: SiWebpack,
  Sass: Sass,
  Redux: Redux,
  Java: Java,
  'Chrome Web Driver': Chromium,
  Eclipse: Eclipse,
  'IBM Rational Team Concert': Ibm,
  Shadcn: ShadcnUiDark,
  PNPM: PnpmDark,
  Sanity: SanityDark,
  Nginx: Nginx,
  'Batch Scripts': FiTerminal,
  Flask: FlaskDark,
  HTML5: Html5,
  Vitest: Vitest,
  tRPC: Trpc,
  Hono: Hono,
  LaTeX: SiLatex,
  'Better Auth': BetterAuthDark,
  Vite: Vite,
  Cloudinary: Cloudinary,
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
