const hamburger = document.getElementById('hamburger');
const nav = document.getElementsByClassName('nav');
const navbar = document.getElementsByClassName('navbar');

const navCollapse = document.getElementsByClassName('nav-collapse')[0];

const fun = () => {
    navCollapse.classList.toggle('hidden');
  };
hamburger.addEventListener('click',fun);

const download = () => {
    window.open('https://mymernbucket-amazona.s3.ap-south-1.amazonaws.com/Resume_ManjeetKumar.pdf', '_blank');
};


const download_btn = document.getElementById('download');

download_btn.addEventListener('click', download);


document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll when clicking on navigation links
    document.querySelectorAll('.scroll-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust this value to match the padding in CSS
                behavior: 'smooth'
            });
        });
    });
});
