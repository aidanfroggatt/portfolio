import { Link } from '@remix-run/react';
import { type InferSelectModel } from 'drizzle-orm';
import { motion } from 'framer-motion';
import { TfiArrowTopRight } from 'react-icons/tfi';
import Dot from '~/components/dot';
import { awards } from '~/db/schema';
import { extractDomain } from '~/utils/url';

type Award = InferSelectModel<typeof awards>;

const InfoAwards = ({ data }: { data: Award[] }) => {
  return (
    <section id="awards">
      <div
        id="awards-content"
        className="flex flex-col border-t border-custom-light/20 gap-y-2 py-16 md:gap-y-8 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl"
      >
        <div className="flex flex-row justify-start items-center gap-x-4">
          <Dot />
          <div className="text-xs 2xl:text-sm text-custom-light/50 py-4 2xl:py-8">AWARDS</div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2">
            {data.map((award) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 'some', once: true }}
                className="flex flex-col items-start justify-start"
              >
                <h4>{award.title}</h4>
                <p className="text-custom-light/50 mt-0.5 md:mt-2">{award.association}</p>
                <Link
                  className="flex flex-row justify-start items-center gap-x-1 text-sm md:text-base duration-200 transition-colors hover:text-custom-light 2xl:text-xl text-custom-light/60 mt-2 md:mt-2"
                  to={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {extractDomain(award.link)}
                  <TfiArrowTopRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoAwards;
