function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (menu && icon) {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    } else {
        console.error("Menu or Icon element not found");
    }
}
function navigateToPage(select) {
    const selectedValue = select.value;
    if (selectedValue) {
      window.open(selectedValue); // Opens the selected page in a new tab // window.location.href = selectedValue; // Navigate to the selected page in the current tab

    }
  }