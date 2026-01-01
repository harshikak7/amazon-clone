// ==========================
// SEARCH BAR FUNCTIONALITY
// ==========================

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {
  searchBtn.addEventListener("click", () => {
    const value = searchInput.value.trim();

    if (value === "") {
      alert("Please enter something to search");
    } else {
      alert(`Searching for: ${value}`);
    }
  });
}


// ==========================
// BACK TO TOP FUNCTIONALITY
// ==========================

const backToTop = document.querySelector(".panel1");

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


// ==========================
// PRODUCT BOX CLICK
// ==========================

const boxes = document.querySelectorAll(".box-click");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    alert("Opening product category...");
  });
});
