import React from "react";
import '../styles/components/Timeline.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {FaArrowDown, FaBriefcase} from "react-icons/fa";

const Timeline = ({info}) => {

    return (
        <VerticalTimeline lineColor={"#F2FEDC"}>
            {/*<VerticalTimelineElement className="timeline-component vertical-timeline-element--work"*/}
            {/*    iconStyle={{ background: '#F2FEDC', color: '#3A254B' }}*/}
            {/*    icon={<FaArrowDown/>}*/}
            {/*>*/}
            {/*</VerticalTimelineElement>*/}

            {
                Object.keys(info.pages.Experience.timeline).map((item, index) => {
                    console.log(info.pages.Experience.timeline[item])
                    return (
                        <VerticalTimelineElement
                            className="timeline-component vertical-timeline-element--work"
                            date={info.pages.Experience.timeline[item].date}
                            iconStyle={{ background: '#F2FEDC', color: '#3A2548' }}
                            key={index}
                            contentStyle={{ background: '#FFFADE', color: '#3A254B'}}
                            icon={<FaBriefcase/>}
                        >
                            <h3 className="vertical-timeline-element-title">{info.pages.Experience.timeline[item].role}</h3>
                            {
                                info.pages.Experience.timeline[item].bulletPoints.map((bullet, bulletKey) => {
                                    return (
                                        <h4 key={bulletKey} className="vertical-timeline-element-subtitle">{bullet}</h4>
                                    )
                                })
                            }
                            <p>
                                {info.pages.Experience.timeline[item].description}
                            </p>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    )
}

export default Timeline;
