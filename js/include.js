// include.js (located in the js folder)
document.addEventListener("DOMContentLoaded", function() {
    // Load the navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });

    // Load the sidebar
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
        });
});
