document.addEventListener("DOMContentLoaded", function () {
  const projectsButton = document.querySelector(".projects-button");

  if (projectsButton) {
    projectsButton.addEventListener("click", function () {
      alert("Navigate to Projects Section"); // Example action
      // In a real scenario, you might scroll to a projects section or load a new page.
    });
  }
});
