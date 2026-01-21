import { Link, useRouteLoaderData } from '@remix-run/react';
import { TfiArrowTopRight } from 'react-icons/tfi';
import LilypadIcon from '~/components/LilypadIcon';
import { config } from '~/data/config';
import { getFirstWord } from '~/lib/string';
import type { RootLoader } from '~/root';

const Footer = () => {
  const rootData = useRouteLoaderData<RootLoader>('root');
  const lastCommit = rootData?.commitInfo;

  return (
    <footer className="flex justify-center items-center relative bottom-0 bg-custom-dark text-custom-light border-t border-custom-light/10 2xl:h-96 md:h-80 2xl:py-20 py-16">
      <div className="h-full justify-evenly items-center flex flex-col md:grid md:grid-cols-2 2xl:w-page-2xl lg:w-page-lg md:w-page-md w-page-default gap-y-8">
        <div className="flex flex-row justify-start md:justify-end items-start gap-x-16 w-full h-full row-start-1 col-start-2">
          <nav className="flex flex-col justify-center items-start gap-y-4">
            <div className="text-xs 2xl:text-sm text-custom-light/50">MAIN</div>
            {config.routes &&
              Object.entries(config.routes).map(([name, to], index) => (
                <Link
                  key={index}
                  className="text-base font-medium 2xl:text-lg hover:cursor-pointer"
                  to={to}
                >
                  {name}
                </Link>
              ))}
          </nav>
          <div className="flex flex-col justify-center items-start gap-y-4">
            <div className="text-xs 2xl:text-sm text-custom-light/50">CONTACT</div>
            {config.socials &&
              Object.entries(config.socials).map(([name, to], index) => (
                <Link
                  key={index}
                  className="flex flex-row justify-start items-center text-base 2xl:text-lg gap-x-1 font-medium"
                  to={to}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                  <TfiArrowTopRight />
                </Link>
              ))}
          </div>
        </div>
        <div className="w-full md:flex hidden h-full flex-col items-start justify-start row-start-1 col-start-1">
          <LilypadIcon className="w-20 h-20 2xl:h-24 2xl:w-24" />
        </div>
        <div className="col-start-1 row-start-2 w-full h-full flex flex-col justify-end items-start">
          <div className="font-medium text-base 2xl:text-lg">{config.name}</div>
          <div className="text-sm 2xl:text-base text-custom-light/50">Thanks for visiting!</div>
        </div>
        <div className="col-start-2 row-start-2 flex flex-col h-full w-full items-start md:items-end justify-end">
          <div className="text-xs 2xl:text-sm text-custom-light/50">
            {lastCommit?.author && lastCommit?.time
              ? `Last updated by ${getFirstWord(lastCommit.author)} on ${lastCommit.time}`
              : 'Latest update info unavailable'}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
