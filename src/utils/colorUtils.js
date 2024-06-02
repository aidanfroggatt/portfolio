// Description: This file contains color utility functions.

/**
 * @author Aidan Froggatt
 * @description Converts a hex color to an RGBA color.
 * @param {string} hex - The hex color code (e.g., "#RRGGBB").
 * @param {number} alpha - The alpha value between 0 and 1.
 * @returns {string} - The RGBA color string.
 */
export const hexToRGBA = (hex, alpha) => {
    // Check if hex and alpha are provided and are of the correct type
    if (typeof hex !== 'string' || typeof alpha !== 'number') {
        throw new Error('Hex color must be a string and alpha must be a number.');
    }

    // Check if hex is a valid hex color code
    if (!/^#[0-9A-F]{6}$/i.test(hex)) {
        throw new Error('Invalid hex color code.');
    }

    // Check if alpha is within the valid range
    if (alpha < 0 || alpha > 1) {
        throw new Error('Alpha value must be between 0 and 1.');
    }

    // Convert hex to RGBA
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
