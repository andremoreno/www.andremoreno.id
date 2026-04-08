function displayMenu(event) {
    document.getElementById("sitenavbar").classList.toggle("show");
}

const scrollTop = document.getElementById('topcontrol')
window.onscroll = () => {
  if (window.scrollY > 0) {
    scrollTop.style.visibility = "visible";
    scrollTop.style.opacity = 1;
  } else {
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
  }
};