document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    // Close the menu when a link is clicked
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  }

  // Modal functionality for Technical Writing
  const technicalWritingButton = document.getElementById(
    "technical-writing-more"
  );
  const technicalWritingModal = document.getElementById(
    "technical-writing-modal"
  );
  const closeTechnicalWritingButton =
    technicalWritingModal.querySelector(".close-button");

  if (
    technicalWritingButton &&
    technicalWritingModal &&
    closeTechnicalWritingButton
  ) {
    technicalWritingButton.addEventListener("click", (event) => {
      event.preventDefault();
      technicalWritingModal.style.display = "flex";
    });

    closeTechnicalWritingButton.addEventListener("click", () => {
      technicalWritingModal.style.display = "none";
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", (event) => {
      if (event.target === technicalWritingModal) {
        technicalWritingModal.style.display = "none";
      }
    });
  }

  // Modal functionality for Digital Cartography
  const digitalCartographyButton = document.getElementById(
    "digital-cartography-more"
  );
  const digitalCartographyModal = document.getElementById(
    "digital-cartography-modal"
  );
  const closeDigitalCartographyButton =
    digitalCartographyModal.querySelector(".close-button");

  if (
    digitalCartographyButton &&
    digitalCartographyModal &&
    closeDigitalCartographyButton
  ) {
    digitalCartographyButton.addEventListener("click", (event) => {
      event.preventDefault();
      digitalCartographyModal.style.display = "flex";
    });

    closeDigitalCartographyButton.addEventListener("click", () => {
      digitalCartographyModal.style.display = "none";
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", (event) => {
      if (event.target === digitalCartographyModal) {
        digitalCartographyModal.style.display = "none";
      }
    });
  }

  // Modal functionality for Spatial Analysis
  const spatialAnalysisButton = document.getElementById(
    "spatial-analysis-more"
  );
  const spatialAnalysisModal = document.getElementById(
    "spatial-analysis-modal"
  );
  const closeSpatialAnalysisButton =
    spatialAnalysisModal.querySelector(".close-button");

  if (
    spatialAnalysisButton &&
    spatialAnalysisModal &&
    closeSpatialAnalysisButton
  ) {
    spatialAnalysisButton.addEventListener("click", (event) => {
      event.preventDefault();
      spatialAnalysisModal.style.display = "flex";
    });

    closeSpatialAnalysisButton.addEventListener("click", () => {
      spatialAnalysisModal.style.display = "none";
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", (event) => {
      if (event.target === spatialAnalysisModal) {
        spatialAnalysisModal.style.display = "none";
      }
    });
  }
});
