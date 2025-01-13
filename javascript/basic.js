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

// This function change the item viewing mode to grid
function showGridMode() {
  itemList = document.querySelectorAll(".item-detail");
  itemList.forEach((element) => {
    element.className = "item-detail grid-view";
  });
}

// This function change the item viewing mode to list
function showListMode() {
  itemList = document.querySelectorAll(".item-detail");
  itemList.forEach((element) => {
    element.className = "item-detail list-view";
  });
}

// Item detail page

// This function is to selec image in item detail page
function showMainImage(obj) {
  const mainImage = document.querySelector("#image-main img");
  mainImage.src = obj.src;
  document.querySelector(".image-active").className = "";
  obj.className = "image-active";
}

// This function is to set current tab as actice in description section
function activeNavTab(obj) {
  document.querySelector(".p-active").className = "";
  obj.className = "p-active";
}
