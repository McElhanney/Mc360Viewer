// Function to toggle the visibility of the side menu
function toggleMenu() {
    var menu = document.getElementById('side-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Function to change the 360 image
function changeImage(imagePath) {
    var sky = document.getElementById('sky');
    sky.setAttribute('src', imagePath);
    toggleMenu(); // Close the menu after changing the image
}
