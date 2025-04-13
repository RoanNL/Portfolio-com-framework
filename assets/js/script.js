const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if (top >=100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
}

const locomotive = document.querySelector('.scroller');

const scroller = new LocomotiveScroll({
    el: locomotive,
    smooth: true
});


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    scroller.scrollTo(href);
  });
});
