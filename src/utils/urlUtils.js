// Description: This file contains URL utility functions.

/**
 * @author Aidan Froggatt
 * @description Extracts the domain from a URL.
 * @param url - The URL to extract the domain from.
 * @returns {string} - The domain of the URL.
 */
export function extractDomain(url) {
    // Create a URL object
    const urlObj = new URL(url);

    // Extract the hostname
    const hostname = urlObj.hostname;

    return hostname;
}