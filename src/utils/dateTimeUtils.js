// Description: This file contains utility functions for date and time operations.

/**
 * @author Aidan Froggatt
 * @description Converts a date string to a formatted date string.
 * @param dateString - The date string to convert. Format 'MM/DD/YYYY, HH:MM:SS PM EST'
 * @returns {string} - The formatted date string. Format: 'Month Day, Year, Hour:Minute AM/PM Timezone'
 */
export const convertDateFormat = (dateString) => {
    const [datePart, timePart] = dateString.split(', ');
    const [month, day, year] = datePart.split('/');
    const [time, ampm] = timePart.split(' ');

    // Convert time from AM/PM to 24-hour format
    let [hour, minute, second] = time.split(':');
    if (ampm === 'PM' && hour !== '12') {
        hour = String(parseInt(hour) + 12);
    } else if (ampm === 'AM' && hour === '12') {
        hour = '00';
    }

    // Construct the Date object using UTC to avoid timezone issues
    const dateObj = new Date(Date.UTC(year, month - 1, day, hour, minute, second));

    // Get month name
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = months[dateObj.getUTCMonth()];

    // Format output string
    const formattedHour = dateObj.getUTCHours() % 12 || 12; // Convert hour to 12-hour format
    const formattedMinute = dateObj.getUTCMinutes().toString().padStart(2, '0'); // Ensure minute is two digits
    const formattedAMPM = dateObj.getUTCHours() < 12 ? 'AM' : 'PM'; // Determine AM/PM
    const formattedTimezone = 'EST'; // Hardcoded timezone as it seems constant in your case

    return `${monthName} ${dateObj.getUTCDate()}, ${dateObj.getUTCFullYear()}, ${formattedHour}:${formattedMinute} ${formattedAMPM} ${formattedTimezone}`;
};

/**
 * @author Aidan Froggatt
 * @description Converts a Firestore timestamp to a JavaScript date.
 * @param timestamp - The Firestore timestamp to convert.
 * @returns {*} - The JavaScript date.
 */
export const convertFirestoreTimestampToJSDate = (timestamp) => {
    return timestamp.toDate();
}

/**
 * @author Aidan Froggatt
 * @description Converts a JavaScript date to a Firestore timestamp.
 * @param dateString
 * @returns {`${string}, ${number}`}
 */
export const formatMonthYear = (dateString) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(dateString);

    // Format the month
    const month = months[date.getMonth()];

    // Format the year
    const year = date.getFullYear();

    // Construct the formatted month-year string
    return `${month}, ${year}`;
};

/**
 * @author Aidan Froggatt
 * @description Calculates the time elapsed between two dates.
 * @param startDate - Format 'YYYY-MM-DDTHH:MM:SSZ'
 * @param endDate - Format 'YYYY-MM-DDTHH:MM:SSZ'
 * @returns {string} - The time elapsed between the two dates.
 */
export const calculateTimeElapsed = (startDate, endDate) => {
    const start = startDate.toDate();
    const end = endDate.toDate();

    const startYear = start.getFullYear();
    const startMonth = start.getMonth();
    const endYear = end.getFullYear();
    const endMonth = end.getMonth();

    const yearsElapsed = endYear - startYear;
    const monthsElapsed = endMonth - startMonth;

    if (yearsElapsed === 0) {
        if (monthsElapsed === 0) {
            return 'Less than a month';
        } else {
            return `${monthsElapsed} ${monthsElapsed === 1 ? 'month' : 'months'}`;
        }
    } else {
        if (monthsElapsed < 0) {
            return `${yearsElapsed - 1} ${yearsElapsed - 1 === 1 ? 'year' : 'years'} ${12 + monthsElapsed} ${monthsElapsed === -1 ? 'month' : 'months'}`;
        } else {
            return `${yearsElapsed} ${yearsElapsed === 1 ? 'year' : 'years'} ${monthsElapsed} ${monthsElapsed === 1 ? 'month' : 'months'}`;
        }
    }
};
