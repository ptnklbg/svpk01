function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");

  sidebar.classList.toggle("active"); // Show/hide sidebar
  overlay.classList.toggle("active"); // Show/hide overlay
}
