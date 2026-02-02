import { ComponentType, lazy, LazyExoticComponent } from 'react';

type MdxModule = { default: ComponentType };

const modules = import.meta.glob<MdxModule>('./*.mdx');

const COMPONENT_MAP: Record<string, LazyExoticComponent<ComponentType>> = {};

for (const path in modules) {
  const fileName = path.split('/').pop();

  if (fileName) {
    const slug = fileName.replace(/\.mdx$/, '');
    COMPONENT_MAP[slug] = lazy(modules[path]);
  }
}

export function getMdxComponent(slug: string) {
  const Component = COMPONENT_MAP[slug];

  if (process.env.NODE_ENV === 'development' && !Component) {
    console.warn(
      `[MDX Registry] Warning: No MDX file found for slug "${slug}". \n` +
        `Expected file at: app/features/work/content/${slug}.mdx`
    );
  }

  return Component;
}
