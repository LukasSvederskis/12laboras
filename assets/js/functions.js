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
