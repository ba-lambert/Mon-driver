function formatDate(isoString: string): string {
    const date = new Date(isoString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getUTCFullYear();

    return `${month}/${day}/${year}`;
}
export default formatDate;