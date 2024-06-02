// Description: This file contains color utility functions.

/**
 * @author Aidan Froggatt
 * @description Converts a hex color to an RGBA color.
 * @param hex
 * @param alpha
 * @returns {`rgba(${number}, ${number}, ${number}, ${string})`}
 */
export const hexToRGBA = (hex, alpha) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};