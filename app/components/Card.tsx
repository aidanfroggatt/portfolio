import { Link } from '@remix-run/react';
import { CSSProperties, ReactNode } from 'react';
import GradientTracker from '~/components/ui/gradient-tracker';

export const LinkCard = ({
  children,
  id,
  color,
  className,
}: {
  children: ReactNode;
  id: string;
  color: string;
  className?: string;
}) => {
  return (
    <div
      id="link-card"
      className={`${className ?? ''} h-auto card-container shadow-card-mobile md:shadow-card`}
    >
      <Link
        to={`/work/${id}`}
        className="overflow-hidden group card flex flex-col md:bg-transparent relative"
        style={{ '--card-color': color } as CSSProperties}
      >
        <GradientTracker className="hover-none:hidden" />
        {children}
      </Link>
    </div>
  );
};

export const ImageCard = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      id="image-card"
      className={`${className ?? ''} card-container shadow-card-mobile md:shadow-card`}
    >
      <div className="card">{children}</div>
    </div>
  );
};

export const MacWindowCard = ({
  children,
  className,
  cardClassName,
}: {
  children: ReactNode;
  className?: string;
  cardClassName?: string;
}) => {
  return (
    <div
      id="mac-window-card"
      className={`${className ?? ''} mac-window-card-container shadow-card-mobile md:shadow-card mt-32 lg:mt-40 2xl:mt-48 2xl:w-page-2xl 2xl:h-mac-window-card-2xl lg:w-page-lg lg:h-mac-window-card-lg md:w-page-md md:h-mac-window-card-md w-work-card-default h-work-card-default`}
    >
      <div className={`${cardClassName ?? ''} card flex justify-center items-center relative`}>
        {children}
      </div>
    </div>
  );
};
