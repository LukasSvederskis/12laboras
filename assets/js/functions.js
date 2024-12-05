document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("mode-toggle");

  toggleButton.addEventListener("click", function () {
    const body = document.body;

    // Toggle between dark and light mode
    if (body.classList.contains("dark-background")) {
      body.classList.remove("dark-background");
      body.classList.add("light-background");
    } else {
      body.classList.remove("light-background");
      body.classList.add("dark-background");
    }
  });
});

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Paleisti funkciją ir atnaujinti kas sekundę
setInterval(updateClock, 1000);
updateClock(); // Nedelsiant atnaujinti laikrodį
