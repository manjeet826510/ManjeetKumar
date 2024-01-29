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


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Use fetch to send a POST request to the server-side endpoint
        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value,
            }),
            
        })
        .then(response => {
            if (response.ok) {
                // Show a success toast
                Toastify({
                    text: "Message sent successfully!",
                    backgroundColor: "green",
                }).showToast();

                // Optionally, reset the form
                this.reset();
            } else {
                // Show an error toast
                Toastify({
                    text: "Error sending message. Please try again.",
                    backgroundColor: "red",
                }).showToast();
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});

