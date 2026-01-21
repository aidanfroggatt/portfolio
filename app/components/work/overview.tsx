import { calculateDateDifference, formatMonthYear } from '~/lib/date';
import { getTechIcon } from '~/lib/icon';
import { Badge } from '../ui/badge';

interface WorkOverviewProps {
  overviewDescription: string;
  roleTitle: string;
  roleDescription: string;
  startDate: Date;
  endDate?: Date;
  color: string;
  team?: { name: string; role: string }[];
  technologies: { name: string }[];
}

const WorkOverview = ({
  overviewDescription,
  roleTitle,
  roleDescription,
  startDate,
  endDate,
  team,
  technologies,
}: WorkOverviewProps) => {
  return (
    <section
      id="work-item-overview"
      className="flex flex-col justify-center items-center gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl"
    >
      <div
        id="work-item-overview-content"
        className="flex flex-col md:flex-row justify-center items-stretch gap-x-10 gap-y-10 md:gap-y-0"
      >
        <div className="flex flex-col justify-start items-start md:w-1/2 gap-y-10">
          <div className="flex flex-col">
            <h5>My Role</h5>
            <p>
              {roleTitle}&nbsp;—&nbsp;
              <span className="text-custom-light/50">{roleDescription}</span>
            </p>
          </div>

          {team && team.length > 0 && (
            <div className="flex flex-col">
              <h5>Team</h5>
              {team.map((member, index) => (
                <p key={index} className="text-custom-light/50">
                  {member.name}, {member.role}
                </p>
              ))}
            </div>
          )}

          <div className="flex flex-col">
            <h5>Timeline & Status</h5>
            <p>
              <span className="text-custom-light/50">
                {endDate
                  ? calculateDateDifference(new Date(startDate), new Date(endDate))
                  : 'On-going'}
                ,&nbsp;
              </span>
              {endDate
                ? `Completed ${formatMonthYear(new Date(endDate))}`
                : 'Started ' + formatMonthYear(new Date(startDate))}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start h-full md:w-1/2 gap-y-10">
          <div className="flex flex-col">
            <h5>Overview</h5>
            <p className="text-custom-light/50">{overviewDescription}</p>
          </div>

          <div className="flex flex-col">
            <h5>Technologies</h5>
            <div className="mt-2 flex flex-wrap gap-2">
              {technologies.map((tech) => {
                const IconComponent = getTechIcon(tech.name);
                return (
                  <Badge
                    key={tech.name}
                    variant="outline"
                    className={
                      'flex items-center gap-2 md:px-4 md:py-2 py-1 px-2 text-sm font-medium transition-all duration-300 bg-custom-light/5 border-custom-light/10 text-custom-light backdrop-blur-md'
                    }
                  >
                    <span className="relative shrink-0 w-4 h-4 text-custom-light/50 transition-all duration-300">
                      <IconComponent className="w-full h-full" />
                    </span>

                    <span className="whitespace-nowrap text-custom-light text-xs md:text-sm">
                      {tech.name}
                    </span>
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOverview;
