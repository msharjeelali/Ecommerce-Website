// This file contain basic functionality for the website

// This function show side menu
function showSideMenu() {
  const sideMenu = document.querySelector(".side-menu");
  sideMenu.style.left = "0px";
}

// This function hide side menu
function hideSideMenu() {
  const sideMenu = document.querySelector(".side-menu");
  sideMenu.style.left = "-300px";
}

// This function implements side bar drop downs
function toggleSideBarDropDown(obj) {
  const filters = obj.nextElementSibling;
  if (filters.style.height === "max-content") {
    filters.style.height = "0";
    filters.nextElementSibling.src = "../images/expand_more.png";
  } else {
    filters.style.height = "max-content";
    filters.nextElementSibling.src = "../images/expand_less.png";
  }
}

// This function show filters side bar menu
function showFilters() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.left = "0px";
}

// This function hide filters side bar menu
function hideFilters() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.left = "-300px";
}
