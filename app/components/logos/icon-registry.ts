import { lazy, type ComponentType } from 'react';
import * as Fi from 'react-icons/fi';
import * as Si from 'react-icons/si';

export type IconComponentType = ComponentType<{ className?: string }>;

interface IconModule {
  [key: string]: IconComponentType;
}

const SVGL_MODULES = import.meta.glob<IconModule>('./svgl/*.tsx');

const LOCAL_REGISTRY = Object.entries(SVGL_MODULES).reduce(
  (acc, [path, importFn]) => {
    const fileName = path.split('/').pop()?.replace('.tsx', '') ?? '';

    acc[fileName] = lazy(() =>
      importFn().then((module) => {
        const exportName = module[fileName] ? fileName : Object.keys(module)[0];
        return { default: module[exportName] };
      })
    );
    return acc;
  },
  {} as Record<string, IconComponentType>
);

const LIBRARY_REGISTRY: Record<string, IconComponentType> = {
  Jira: Si.SiJira,
  LinkedIn: Si.SiLinkedin,
  Devpost: Si.SiDevpost,
  'Batch Scripts': Fi.FiTerminal,
  'Amazon S3': Si.SiAmazons3,
  Apache: Si.SiApache,
  Backblaze: Si.SiBackblaze,
  Box: Si.SiBox,
  Brevo: Si.SiBrevo,
  Jenkins: Si.SiJenkins,
  JFrog: Si.SiJfrog,
  JUnit: Si.SiJunit5,
  LaTeX: Si.SiLatex,
  MDX: Si.SiMdx,
  PyTorch: Si.SiPytorch,
  Selenium: Si.SiSelenium,
  Webpack: Si.SiWebpack,
  Code: Fi.FiCode,
};

export const PLATFORM_REGISTRY: Record<string, IconComponentType> = {
  GitHub: Si.SiGithub,
  LinkedIn: Si.SiLinkedin,
  Website: Fi.FiGlobe,
  Devpost: Si.SiDevpost,
  External: Fi.FiExternalLink,
};

const ALIASES: Record<string, string> = {
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  React: 'reactDark',
  'React Native': 'reactDark',
  'Next.js': 'nextjsIconDark',
  'Node.js': 'nodejs',
  'Tailwind CSS': 'tailwindcss',
  TailwindCSS: 'tailwindcss',
  Drizzle: 'drizzleOrmDark',
  'Better Auth': 'betterAuthDark',
  Framer: 'framerDark',
  GitHub: 'githubDark',
  Go: 'golangDark',
  Clerk: 'clerkIconDark',
  Turborepo: 'turborepoIconDark',
  Shadcn: 'shadcnUiDark',
  Render: 'renderWhite',
  'Express.js': 'expressjsDark',
  'Cloudflare Workers': 'cloudflareWorkers',
  'Chrome Web Driver': 'chromium',
  'Google Maps': 'googleMaps',
  'Amazon S3': 'SiAmazons3',
  ESLint: 'eslintIconDark',
  MySQL: 'mysqlIconDark',
  PNPM: 'pnpmDark',
  pnpm: 'pnpmDark',
  Vercel: 'vercelDark',
  Neon: 'neon',
  PostgreSQL: 'postgresql',
  HTML5: 'html5',
  Expo: 'expo',
};

export const ICON_REGISTRY: Record<string, IconComponentType> = {
  ...LOCAL_REGISTRY,
  ...LIBRARY_REGISTRY,
};

const SEARCH_KEYS = Object.keys(ICON_REGISTRY).sort((a, b) => b.length - a.length);
const PLATFORM_KEYS = Object.keys(PLATFORM_REGISTRY).sort((a, b) => b.length - a.length);

const normalize = (s: string) => s.toLowerCase().replace(/[\s\-_.]/g, '');

export const resolveIconKey = (name: string): string => {
  if (ALIASES[name]) return ALIASES[name];

  const cleanName = normalize(name);

  const match = SEARCH_KEYS.find((key) => {
    const cleanKey = normalize(key);
    return cleanKey === cleanName || cleanKey.includes(cleanName) || cleanName.includes(cleanKey);
  });

  return match ?? 'Code';
};

export const resolvePlatformKey = (name: string): string => {
  const cleanName = normalize(name);
  const match = PLATFORM_KEYS.find((key) => {
    const cleanKey = normalize(key);
    return cleanKey === cleanName || cleanKey.includes(cleanName) || cleanName.includes(cleanKey);
  });
  return match ?? 'Website';
};
