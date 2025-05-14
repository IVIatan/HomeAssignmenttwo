document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("darkModeToggle");
  const modeIcon = document.getElementById("modeIcon");
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  const basePath = window.location.pathname.includes("HomeAssignmenttwo")
    ? "/HomeAssignmenttwo/"
    : "/";

  const icons = {
  email: {
    light: "https://iviatan.github.io/HomeAssignmenttwo/assets/imgs/email.png",
    dark: "https://iviatan.github.io/HomeAssignmenttwo/assets/imgs/emailcolor.png"
  },
  github: {
    light: "https://iviatan.github.io/HomeAssignmenttwo/assets/imgs/github.png",
    dark: "https://iviatan.github.io/HomeAssignmenttwo/assets/imgs/githubcolor.png"
  },
  linkedin: {
    light: "https://iviatan.github.io/HomeAssignmenttwo/assets/imgs/linkedin.png",
    dark: "https://iviatan.github.io/HomeAssignmenttwo/assets/imgs/linkedincolor.png"
  }
};


  function updateIcons() {
    const isDark = document.body.classList.contains("dark-mode");
    document.querySelectorAll("img[data-icon]").forEach((img) => {
      const icon = img.dataset.icon;
      if (icons[icon]) {
        img.src = isDark ? icons[icon].dark : icons[icon].light;
      }
    });
  }

  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
    modeIcon.src = basePath + "assets/imgs/DarkMode.png";
  } else {
    document.body.classList.remove("dark-mode");
    modeIcon.src = basePath + "assets/imgs/LightMode.png";
  }

  window.addEventListener("load", updateIcons);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("mode", isDark ? "dark" : "light");
    modeIcon.src = isDark
      ? basePath + "assets/imgs/DarkMode.png"
      : basePath + "assets/imgs/LightMode.png";
    updateIcons();
  });

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("open");
    });
  }
});
