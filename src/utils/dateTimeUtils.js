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
