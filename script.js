function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // Convert midnight (0 hours) to 12

  document.getElementById('hourTens').textContent = Math.floor(hours / 10);
  document.getElementById('hourOnes').textContent = hours % 10;
  document.getElementById('minuteTens').textContent = minutes.charAt(0);
  document.getElementById('minuteOnes').textContent = minutes.charAt(1);
  document.getElementById('secondTens').textContent = seconds.charAt(0);
  document.getElementById('secondOnes').textContent = seconds.charAt(1);
  document.getElementById('ampm').textContent = ampm;
}

setInterval(updateClock, 1000);
