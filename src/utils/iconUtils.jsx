import * as SiIcons from "react-icons/si";

// Description: This file contains icon utility functions.

/**
 * @author Aidan Froggatt
 * @description This function returns an icon component based on the icon name provided.
 * @param iconName - Must be a valid icon name from the react-icons/si package.
 * @param style - Optional style object.
 * @param className - Optional class name.
 * @returns {JSX.Element|null}
 */
export const getSiIconByName = ({iconName, style, className}) => {
    const IconComponent = SiIcons[iconName];
    return IconComponent ? <IconComponent style={style} className={className}/> : null;
};