
export function extractDomain(url: string) {
    // Create a URL object
    const urlObj = new URL(url);

    // Extract the hostname
    const hostname = urlObj.hostname;

    return hostname;
}