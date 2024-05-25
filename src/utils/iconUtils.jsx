import * as SiIcons from "react-icons/si";

export const getIconByName = ({iconName, style, className}) => {
    const IconComponent = SiIcons[iconName];
    return IconComponent ? <IconComponent style={style} className={className}/> : null;
};