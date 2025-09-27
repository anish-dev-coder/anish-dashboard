const menuBtn = document.querySelector("#menu");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const themeBtn = document.querySelector("#theme");
let theme = localStorage.getItem("isDark");

// default theme
document
  .querySelector(":root")
  .style.setProperty("--main", localStorage.getItem("color"));

// color theme code
document.querySelectorAll(".color").forEach((btn) => {
  btn.onclick = () => {
    const color = btn.style.background;
    localStorage.setItem("color", color);
    document.querySelector(":root").style.setProperty("--main", color);
  };
});

menuBtn.onclick = () => {
  sidebar.classList.toggle("show");
  document.body.classList.toggle("show");
  overlay.classList.toggle("show");
};

overlay.onclick = () => {
  overlay.classList.remove("show");
  sidebar.classList.remove("show");
};

if (window.innerWidth > 450) {
  sidebar.classList.remove("show");
}

// darkmode code
let enabledDarkMode = () => {
  themeBtn.classList.replace("fa-moon", "fa-sun");
  document.body.classList.add("darkMode");
  localStorage.setItem("isDark", "enabled");
};

let disabledDarkMode = () => {
  themeBtn.classList.replace("fa-sun", "fa-moon");
  document.body.classList.remove("darkMode");
  localStorage.setItem("isDark", "disabled");
};
if (theme === "enabled") {
  enabledDarkMode();
}
themeBtn.onclick = () => {
  theme = localStorage.getItem("isDark");

  if (theme === "disabled") {
    enabledDarkMode();
  } else {
    disabledDarkMode();
  }
};

// back button code
const backpage = () => {
  window.history.back();
};

// bar chart
let myChart1 = document.getElementById("myChart1");
new Chart(myChart1, {
  type: "bar",
  data: {
    labels: [
      "Categorie",
      "Project",
      "Skill",
      "User",
      "Contact",
      "Education",
      "Experienc",
      "Register",
    ],
    datasets: [
      {
        label: "Total Records",
        data: [1, 3, 4, 5, 6, 7, 4, 5],
        borderWidth: 1,

        backgroundColor: [
          "#a3cde0",
          "#84ccc5",
          "#ffb64c",
          "#a8a8a8",
          "#f48eb1",
          "#f77b72",
          "#9475cc",
          "#4ec2f7",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    padding: [(top = "20")],
  },
});

// circle chart
let myChart2 = document.getElementById("myChart2");
new Chart(myChart2, {
  type: "pie",
  data: {
    labels: [
      "Categorie",
      "Project",
      "Skill",
      "User",
      "Contact",
      "Education",
      "Experienc",
      "Register",
    ],

    datasets: [
      {
        label: "Total Data",
        data: [1, 2, 3, 4, 5, 6, 7, 8],
        borderWidth: 1,

        backgroundColor: [
          "#a3cde0",
          "#84ccc5",
          "#ffb64c",
          "#a8a8a8",
          "#f48eb1",
          "#f77b72",
          "#9475cc",
          "#4ec2f7",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    padding: [(top = "20")],
  },
});
