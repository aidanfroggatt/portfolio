import * as SiIcons from "react-icons/si";

export const getIconByName = (iconName) => {
    const IconComponent = SiIcons[iconName];
    return IconComponent ? <IconComponent style={{width: "3vmax", height: "3vmax"}}/> : null;
};