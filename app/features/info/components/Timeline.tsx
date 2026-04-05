import { motion } from 'framer-motion';
import { Section } from '~/features/info/components/Section';
import { type Experience } from '~/features/info/types';
import { formatSQLDateString } from '~/utils/date';

interface TimelineProps {
  id: string;
  title: string;
  data: Experience[];
}

export const Timeline = ({ id, title, data }: TimelineProps) => (
  <Section id={id} title={title}>
    <div className="flex flex-col gap-y-16 md:gap-y-20 2xl:gap-y-28">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:grid md:grid-cols-2 md:gap-x-20 justify-start items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="md:grow text-shadow-mobile md:text-shadow">
              {item.companyWebsite ? (
                <a
                  href={item.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-custom-light/80 transition-colors"
                >
                  {item.company}
                </a>
              ) : (
                item.company
              )}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start justify-start"
          >
            <h4 className="mt-3 md:mt-0">{item.role}</h4>
            {item.team && (
              <h5>
                <span className="text-custom-light/70">{item.team}</span>
              </h5>
            )}
            <span className="text-custom-light/50 text-sm md:text-base 2xl:text-lg mt-2 md:mt-1.5">
              {formatSQLDateString(item.startDate)} — {formatSQLDateString(item.endDate)}
            </span>
            <p className="text-custom-light/60 mt-3 md:mt-4 2xl:mt-6 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  </Section>
);
