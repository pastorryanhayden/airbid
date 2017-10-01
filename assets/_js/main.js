// Variables
var stickyOffset = 200;

// Get the navbar
var navbar = document.getElementById('navigation');
var content = document.getElementById('content');

// Get the offset position of the navbar
var sticky = content.offsetTop;
window.addEventListener('resize', function() {
    sticky = content.offsetTop;
});

// Get Navigation links
var linksSections = document.querySelectorAll('#navigation a');

// Scroll to section
linksSections.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        // Get section
        var section = document.querySelector(link.getAttribute('href'));
        window.scrollTo(0, section.offsetTop - stickyOffset / 2);
    });
});

window.addEventListener('scroll', function() {
    // Add the sticky class to the navbar when you reach its scroll position. 
    // Remove "sticky" when you leave the scroll position
    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    // Add active class to navbar links when reach its scroll position. 
    // Remove acte class when leaving the scroll position
    linksSections.forEach(function(link) {
        // Get section
        var section = document.querySelector(link.getAttribute('href'));
        // Get section Offset
        var sectionBottomOffset = section.offsetTop + section.offsetHeight;
        sectionBottomOffset = sectionBottomOffset - stickyOffset;
        var sectionTopOffset = section.offsetTop - stickyOffset;

        // Add the active class to the section link
        // when you reach its scroll position. 
        // Remove "sticky" when you leave the scroll position
        var isScrollOver = window.scrollY >= sectionTopOffset;
        var isScrollOut = window.scrollY <= sectionBottomOffset;
        if ( isScrollOver && isScrollOut) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
