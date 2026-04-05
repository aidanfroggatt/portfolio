import { createElement, Suspense, useMemo } from 'react';
import {
  ICON_REGISTRY,
  PLATFORM_REGISTRY,
  resolveIconKey,
  resolvePlatformKey,
} from '~/components/logos/icon-registry';
import { cn } from '~/lib/utils';

interface TechIconProps {
  name: string;
  className?: string;
  mode?: 'tech' | 'platform';
}

export const TechIcon = ({ name, className, mode = 'tech' }: TechIconProps) => {
  const iconReference = useMemo(() => {
    if (mode === 'platform') {
      const key = resolvePlatformKey(name);
      return PLATFORM_REGISTRY[key] || PLATFORM_REGISTRY.Code;
    }

    const key = resolveIconKey(name);
    return ICON_REGISTRY[key] || ICON_REGISTRY.Code;
  }, [name, mode]);

  return (
    <Suspense
      fallback={
        <div className={cn('animate-pulse bg-custom-light/5 rounded-sm w-5 h-5', className)} />
      }
    >
      {createElement(iconReference, {
        className: cn('shrink-0 transition-opacity duration-300', className),
      })}
    </Suspense>
  );
};
