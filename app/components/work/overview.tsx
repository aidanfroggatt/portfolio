import { calculateDateDifference, formatMonthYear } from "~/utils/date";
import { getTechIcon } from "~/utils/icon";
import Tooltip from "../Tooltip";

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
  color,
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
              <span className="text-opacity-50 text-custom-light">
                {roleDescription}
              </span>
            </p>
          </div>

          {team && team.length > 0 && (
            <div className="flex flex-col">
              <h5>Team</h5>
              {team.map((member, index) => (
                <p key={index} className="text-custom-light text-opacity-50">
                  {member.name}, {member.role}
                </p>
              ))}
            </div>
          )}

          <div className="flex flex-col">
            <h5>Timeline & Status</h5>
            <p>
              <span className="text-custom-light text-opacity-50">
                {endDate
                  ? calculateDateDifference(
                      new Date(startDate),
                      new Date(endDate),
                    )
                  : "On-going"}
                ,&nbsp;
              </span>
              {endDate
                ? `Completed ${formatMonthYear(new Date(endDate))}`
                : "Started " + formatMonthYear(new Date(startDate))}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start h-full md:w-1/2 gap-y-10">
          <div className="flex flex-col">
            <h5>Overview</h5>
            <p className="text-custom-light text-opacity-50">
              {overviewDescription}
            </p>
          </div>

          <div className="flex flex-wrap md:flex-row w-full justify-evenly md:justify-start gap-8 items-center">
            {technologies.map((technology, index) => {
              const IconComponent = getTechIcon(technology.name);

              return (
                <div
                  key={index}
                  className="icon-link"
                  style={{ "--link-color": color } as React.CSSProperties}
                >
                  <Tooltip text={technology.name}>
                    <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12" />
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOverview;
