import * as SiIcons from "react-icons/si";

export const getIconByName = (iconName) => {
    const IconComponent = SiIcons[iconName];
    return IconComponent ? <IconComponent className="w-10 h-10" /> : null;
};