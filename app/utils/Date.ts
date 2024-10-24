
export const formatDate = (date: Date): string => {
    return date.toLocaleDateString(); // Customize this as needed for specific formatting
};

export const calculateDateDifference = (startDate: Date, endDate: Date): string => {
    const diffTime = endDate.getTime() - startDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Total days difference
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60)); // Total hours difference

    // Under 2 days: format as hours
    if (diffHours < 48) {
        return `${diffHours} hours`;
    }

    // Between 2 days and 7 days: format as days
    if (diffDays < 7) {
        return `${diffDays} days`;
    }

    // Between 7 days and 1 month: format as weeks
    if (diffDays < 30) {
        const diffWeeks = Math.ceil(diffDays / 7); // Total weeks difference
        return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''}`;
    }

    // Between 1 month and 1 year: format as months
    if (diffDays < 365) {
        const diffMonths = Math.ceil(diffDays / 30); // Total months difference
        return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
    }

    // Over 1 year: format as years and months
    const years = Math.floor(diffDays / 365);
    const months = Math.ceil((diffDays % 365) / 30);
    return `${years} year${years > 1 ? 's' : ''}${months > 0 ? `, ${months} month${months > 1 ? 's' : ''}` : ''}`;
};

export const formatMonthYear = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString(undefined, options); // Use default locale
};


export const formatGithubCommitDate = (date: Date): string => {
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: 'short'
    });
};
