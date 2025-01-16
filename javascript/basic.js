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

// Range slider

const rangevalue = document.querySelector(".slider-container  .price-slider");
const rangeInputvalue = document.querySelectorAll(".range-input input");

const priceInputvalue = document.querySelectorAll(".price-input input");
for (let i = 0; i < priceInputvalue.length; i++) {
  priceInputvalue[i].addEventListener("input", (e) => {
    // Parse min and max values of the range input
    let minp = parseInt(priceInputvalue[0].value);
    let maxp = parseInt(priceInputvalue[1].value);
    let diff = maxp - minp;

    if (minp < 0) {
      alert("minimum price cannot be less than 0");
      priceInputvalue[0].value = 0;
      minp = 0;
    }

    // Validate the input values
    if (maxp > 10000) {
      alert("maximum price cannot be greater than 10000");
      priceInputvalue[1].value = 10000;
      maxp = 10000;
    }

    if (minp > maxp - priceGap) {
      priceInputvalue[0].value = maxp - priceGap;
      minp = maxp - priceGap;

      if (minp < 0) {
        priceInputvalue[0].value = 0;
        minp = 0;
      }
    }

    // Check if the price gap is met
    // and max price is within the range
    if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
      if (e.target.className === "min-input") {
        rangeInputvalue[0].value = minp;
        let value1 = rangeInputvalue[0].max;
        rangevalue.style.left = `${(minp / value1) * 100}%`;
      } else {
        rangeInputvalue[1].value = maxp;
        let value2 = rangeInputvalue[1].max;
        rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
      }
    }
  });
}

// Add event listeners to range input elements
for (let i = 0; i < rangeInputvalue.length; i++) {
  rangeInputvalue[i].addEventListener("input", (e) => {
    let minVal = parseInt(rangeInputvalue[0].value);
    let maxVal = parseInt(rangeInputvalue[1].value);

    let diff = maxVal - minVal;

    // Check if the price gap is exceeded
    if (diff < priceGap) {
      // Check if the input is the min range input
      if (e.target.className === "min-range") {
        rangeInputvalue[0].value = maxVal - priceGap;
      } else {
        rangeInputvalue[1].value = minVal + priceGap;
      }
    } else {
      // Update price inputs and range progress
      priceInputvalue[0].value = minVal;
      priceInputvalue[1].value = maxVal;
      rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`;
      rangevalue.style.right = `${
        100 - (maxVal / rangeInputvalue[1].max) * 100
      }%`;
    }
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

// This function is show and hide description of product on mobile view
function showFullDetails(obj) {
  const productDesc = document.querySelector(".summary");
  if (obj.textContent === "Read more") {
    productDesc.style.height = "fit-content";
    obj.textContent = "Read less";
  } else {
    productDesc.style.height = "80px";
    obj.textContent = "Read more";
  }
}
