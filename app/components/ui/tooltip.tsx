import { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute left-1/2 mt-1 -translate-x-1/2 top-full w-max px-2 py-1 text-white text-sm rounded bg-custom-light/5 border border-custom-light/10 backdrop-blur opacity-0 group-active:opacity-100 group-focus:opacity-100 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
