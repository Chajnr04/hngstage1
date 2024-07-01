const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDate = new Date();
const options = { timeZone: 'UTC', hour12: false, hour: '2-digit', minute: '2-digit' };
currentTimeUTC.textContent = currentDate.toLocaleTimeString('en-US', options);


const currentDAY = document.querySelector('[data-testid="currentDay"]');
currentDAY.textContent = currentDate.toLocaleDateString('en-US', {weekday: 'long'});