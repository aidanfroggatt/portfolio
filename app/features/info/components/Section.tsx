import { ReactNode } from 'react';
import Dot from '~/components/ui/dot';
import { cn } from '~/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  showBorder?: boolean;
  className?: string;
}

export const Section = ({ id, title, children, showBorder = true, className }: SectionProps) => (
  <section id={id} className={cn('w-full flex flex-col items-center', className)}>
    <div
      className={cn(
        'flex flex-col w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl py-10 md:py-16',
        showBorder && 'border-t border-custom-light/20'
      )}
    >
      <div className="flex flex-row justify-start items-center gap-x-2 md:gap-x-4 mb-4 md:mb-8">
        <Dot />
        <span className="text-xs 2xl:text-sm text-custom-light/50 uppercase tracking-widest py-4">
          {title}
        </span>
      </div>
      {children}
    </div>
  </section>
);
