function myFunction() {
    document.getElementById('hidden').style.visibility='visible'
}


function toggleMode() {
    var element = document.body;
    var elementNav = document.getElementById('header');
    var toggleIcon = document.getElementById('toggle');
    var navLink = document.getElementById('nav-link');
    var contentImage = document.getElementById('content-img1');

    navLink.classList.toggle('darkmode-navlink');
    toggleIcon.classList.toggle('dark-mode-toggle');
    elementNav.classList.toggle("dark-mode-nav");
    element.classList.toggle("dark-mode");
    contentImage.classList.toggle("section1dark")
}
