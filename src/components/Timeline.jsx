import React from "react";
import '../styles/components/Timeline.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {FaBriefcase} from "react-icons/fa";
import Tooltip from "./Tooltip";

const Timeline = ({info}) => {



    return (
        <VerticalTimeline lineColor={"#007662"}>
            {/*<VerticalTimelineElement className="timeline-component vertical-timeline-element--work"*/}
            {/*    iconStyle={{ background: '#F2FEDC', color: '#3A254B' }}*/}
            {/*    icon={<FaArrowDown/>}*/}
            {/*>*/}
            {/*</VerticalTimelineElement>*/}

            {
                Object.keys(info.pages.Experience.timeline).map((item, index) => {
                    const alt = index % 2 === 0
                    return (
                        <VerticalTimelineElement
                            className="timeline-component vertical-timeline-element--work"
                            date={info.pages.Experience.timeline[item].date}
                            iconStyle={alt ? {background: '#FFFADE', color: '#007662'} : { background: '#F2FEDC', color: '#007662' }}
                            key={index}
                            contentStyle={alt ? { background: '#FFFADE', color: '#3A254B'} : { background: '#F2FEDC', color: '#3A254B'}}
                            icon={<FaBriefcase/>}
                        >
                            <div className="timeline-component-subheading">{info.pages.Experience.timeline[item].company}</div>
                            <div className="timeline-component-heading">{info.pages.Experience.timeline[item].role}</div>
                            {
                                info.pages.Experience.timeline[item].bulletPoints.map((bullet, bulletKey) => {
                                    return (
                                        <div key={bulletKey} className="">{bullet}</div>
                                    )
                                })
                            }
                            <div className={alt ? "timeline-component-technologies-container" : "timeline-component-technologies-container timeline-component-technologies-container-alt"}>
                                {
                                    Object.keys(info.pages.Experience.timeline[item].technologies).map((tech, techKey) => {
                                        return (
                                            <Tooltip content={info.pages.Experience.timeline[item].technologies[tech].name}>
                                                <div key={techKey} className="timeline-component-technology">
                                                    {info.pages.Experience.timeline[item].technologies[tech].icon}
                                                </div>
                                            </Tooltip>
                                        )
                                    })
                                }
                            </div>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    )
}

export default Timeline;
