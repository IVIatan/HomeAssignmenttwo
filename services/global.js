document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("darkModeToggle");
  const modeIcon = document.getElementById("modeIcon");
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  const base = "https://iviatan.github.io/HomeAssignmenttwo/";

  const icons = {
    email: {
      light: base + "assets/imgs/email.png",
      dark: base + "assets/imgs/emailcolor.png"
    },
    github: {
      light: base + "assets/imgs/github.png",
      dark: base + "assets/imgs/githubcolor.png"
    },
    linkedin: {
      light: base + "assets/imgs/linkedin.png",
      dark: base + "assets/imgs/linkedincolor.png"
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
    modeIcon.src = base + "assets/imgs/DarkMode.png";
  } else {
    document.body.classList.remove("dark-mode");
    modeIcon.src = base + "assets/imgs/LightMode.png";
  }

  window.addEventListener("load", updateIcons);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("mode", isDark ? "dark" : "light");
    modeIcon.src = isDark
      ? base + "assets/imgs/DarkMode.png"
      : base + "assets/imgs/LightMode.png";
    updateIcons();
  });

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("open");
    });
  }
});
