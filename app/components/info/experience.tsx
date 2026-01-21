import { type InferSelectModel } from 'drizzle-orm';
import { motion } from 'framer-motion';
import Dot from '~/components/dot';
import { experiences } from '~/db/schema';
import { formatSQLDateString } from '~/lib/date';

type Experience = InferSelectModel<typeof experiences>;

const InfoExperience = ({ data }: { data: Experience[] }) => {
  return (
    <section id="experience">
      <div
        id="experience-content"
        className="flex border-t border-custom-light/20 py-10 md:py-16 flex-col gap-y-2 md:gap-y-8 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl"
      >
        <div className="flex flex-row justify-start items-center gap-x-2 md:gap-x-4">
          <Dot />
          <div className="text-xs 2xl:text-sm text-custom-light/50 py-4 2xl:py-8">EXPERIENCE</div>
        </div>
        <div className="flex flex-col gap-y-16 md:gap-y-20 2xl:gap-y-28">
          {data.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col md:grid md:grid-cols-2 md:gap-x-20 justify-start items-start"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.5, once: true }}
              >
                <h2 className="md:flex-grow text-shadow-mobile md:text-shadow">
                  {exp.companyWebsite ? (
                    <a href={exp.companyWebsite} target="_blank" rel="noopener noreferrer">
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h2>
              </motion.div>
              <motion.div
                className="flex flex-col items-start justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 'some', once: true }}
              >
                <h4 className="mt-3 md:mt-0">{exp.role}</h4>
                {exp.team && (
                  <h5>
                    <span className="text-custom-light/70">{exp.team}</span>
                  </h5>
                )}
                <span className="text-custom-light/50 text-sm md:text-base 2xl:text-lg mt-2 md:mt-1.5 2xl:mt-2">
                  {formatSQLDateString(exp.startDate)} - {formatSQLDateString(exp.endDate)}
                </span>
                <p className="text-custom-light/60 mt-3 md:mt-4 2xl:mt-6">{exp.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoExperience;
