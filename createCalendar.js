function createCalendar(options) {
    const data = options.data;
    const start = formatDateForCalendar(data.start);
    const end = formatDateForCalendar(data.end);
    const title = encodeURIComponent(data.title);
    const address = encodeURIComponent(data.address);
    const description = encodeURIComponent(data.description);

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${description}&location=${address}&sf=true&output=xml`;

    return `<a href="${url}" target="_blank" class="add-to-calendar-btn">Add to Google Calendar</a>`;
}

// Format JS date to YYYYMMDDTHHMMSSZ for Google Calendar
function formatDateForCalendar(date) {
    const yyyy = date.getUTCFullYear();
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(date.getUTCDate()).padStart(2, '0');
    const hh = String(date.getUTCHours()).padStart(2, '0');
    const min = String(date.getUTCMinutes()).padStart(2, '0');
    const ss = String(date.getUTCSeconds()).padStart(2, '0');
    return `${yyyy}${mm}${dd}T${hh}${min}${ss}Z`;
}
