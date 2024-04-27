// dateTimeUtils.js

// Function to convert date string from 'M/D/YYYY, h:m:s A' format to 'Month Day, Year, h:m A Timezone' format
export const convertDateFormat = (dateString) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(dateString);

    // Format the month
    const month = months[date.getMonth()];

    // Format the day
    const day = date.getDate();

    // Format the year
    const year = date.getFullYear();

    // Format the hour
    let hour = date.getHours();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;

    // Format the minutes
    const minutes = date.getMinutes();

    // Format the timezone
    const timezone = 'EST'; // You can change this to your desired timezone

    // Construct the formatted date string
    return `${month} ${day}, ${year}, ${hour}:${minutes < 10 ? '0' : ''}${minutes} ${ampm} ${timezone}`;
};

// Function to convert Firestore timestamp to JavaScript Date object
export const convertFirestoreTimestampToJSDate = (timestamp) => {
    return timestamp.toDate();
}

// Function to format date string to 'Month, Year' format
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

// Function to calculate time elapsed between two Firestore timestamps
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
