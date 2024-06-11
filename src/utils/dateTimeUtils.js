// Description: This file contains utility functions for date and time operations.

/**
 * @author Aidan Froggatt
 * @description Converts a date string to a formatted date string.
 * @param dateString - The date string to convert. Format 'YYYY-MM-DDTHH:MM:SSZ'
 * @returns {string} - The formatted date string. Format: 'Month Day, Year, Hour:Minute AM/PM Timezone'
 */
export const convertDateFormat = (dateString) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(dateString);

    // Handle time zone conversion to EST
    const options = { timeZone: 'America/New_York', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedParts = formatter.formatToParts(date);

    let month, day, year, hour, minute, ampm;
    formattedParts.forEach(part => {
        switch (part.type) {
            case 'month':
                month = part.value;
                break;
            case 'day':
                day = part.value;
                break;
            case 'year':
                year = part.value;
                break;
            case 'hour':
                hour = part.value;
                break;
            case 'minute':
                minute = part.value;
                break;
            case 'dayPeriod':
                ampm = part.value;
                break;
        }
    });

    // Format the timezone
    const timezone = 'EST'; // You can change this to your desired timezone

    // Construct the formatted date string
    return `${month} ${day}, ${year}, ${hour}:${minute < 10 ? '0' : ''}${minute} ${ampm} ${timezone}`;
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
