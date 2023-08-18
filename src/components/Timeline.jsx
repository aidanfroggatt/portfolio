import React from "react";
import '../styles/components/Timeline.css';
import { Chrono } from "react-chrono";
import {AppInfo} from "../info/AppInfo";

const Timeline = () => {

    return (
        <div className="timeline">
            <Chrono
                items ={AppInfo.pages.Experience.chrono}
                mode = "VERTICAL"
                flipLayout = {true}
            />
        </div>
    )
}

export default Timeline;
