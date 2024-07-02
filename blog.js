
window.addEventListener('DOMContentLoaded', (event) => {
    // Define a function to update the current time and day
    const updateTimeAndDay = () => {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleDateString('en-GB', { weekday: 'long' });

        document.getElementById('current-time').innerText = utcTime;
        document.getElementById('current-day').innerText = dayOfWeek;
    };
    // Update the HTML elements
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
