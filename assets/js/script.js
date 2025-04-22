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




const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
})
})

const elements = document.querySelectorAll('.hidden');
  
elements.forEach((element) => {
  myObserver.observe(element);
})