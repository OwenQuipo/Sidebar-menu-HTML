// Get all the links in the sidebar
var links = document.querySelectorAll('.sidebar a');

// Add an event listener to each link
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Get the target element
      var target = document.querySelector(this.getAttribute('href'));

      // Scroll smoothly to the target element
      target.scrollIntoView({behavior: 'smooth'});
  });
}
// Get the sidebar and toggle button elements
var sidebar = document.querySelector('.sidebar');
var toggleButton = document.querySelector('#toggle-sidebar');
var mainContent = document.querySelector('.main');

// Get the sidebar and toggle button elements
var sidebar = document.querySelector('.sidebar');
var toggleButton = document.querySelector('#toggle-sidebar');
var mainContent = document.querySelector('.main');

// Add an event listener to the toggle button
toggleButton.addEventListener('click', function() {
    // Toggle the visibility of the sidebar
    sidebar.style.left = (sidebar.style.left === '0px' || sidebar.style.left === '') ? '-200px' : '0px';

    // Update the position of the toggle button
    toggleButton.style.left = (sidebar.style.left === '0px') ? '200px' : '0px';

    // Update the margin of the main content
    mainContent.style.marginLeft = (sidebar.style.left === '0px') ? '200px' : '0px';
});
