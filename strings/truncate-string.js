function truncateText(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}
console.log(truncateText('I Love India', 3));
