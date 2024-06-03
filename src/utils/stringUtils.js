// Description: This file contains string utility functions.

/**
 * @author Aidan Froggatt
 * @description Capitalizes the first letter of a string.
 * @param str - The string to capitalize.
 * @returns {*|string} - The capitalized string.
 */
export const getFirstWord = (str) => {
    // Remove leading and trailing whitespace
    str = str.trim();

    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');

    if (spaceIndex !== -1) {
        // If space is found, return the substring from the start to the space
        return str.substring(0, spaceIndex);
    } else {
        // If no space is found, return the whole string
        return str;
    }
}
