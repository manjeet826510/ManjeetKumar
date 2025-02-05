const ham = document.getElementsByClassName('ham');

const navCollapse = document.getElementsByClassName('nav-collapse')[0];

const fun = () => {
    navCollapse.classList.toggle('hidden');
  };
ham[0].addEventListener('click',fun);

const download = () => {
    window.open('https://mymernbucket-amazona.s3.ap-south-1.amazonaws.com/Copy+of+manjeet_resume+(12).pdf', '_blank');
};


const download_btn = document.getElementById('download');

download_btn.addEventListener('click', download);



let isDarkTheme = false;

const applyNormalThemeToElement = () => {
    document.body.style.backgroundColor= '#fff'
    const customDivs = document.querySelectorAll('.home, .home-section, .projects, .projects-section, .skills, .skills-section, .contacts, .contacts-section, .navbar, .home-card, .skill-card, .project-card, .contact-card, label');
    
    for (const div of customDivs) {
        div.style.backgroundColor = '#f6f6f6';  // Reset to default
        div.style.color = '#000';  // Reset to default
        div.style.boxShadow = '0 0 10px rgb(0 0 0 / 10%)';
    }

    const navbarElements = document.querySelectorAll('.navbar ul a, .navbar i, .logo');

    
    for (const nav of navbarElements) {
        nav.style.color = '#2d2e32';  // Reset to default
    }

    const navCollapseDivs = document.querySelectorAll('.nav-collapse, .nav-collapse ul a');

    for (const div of navCollapseDivs) {
        div.style.backgroundColor = '#f1eeee';
        div.style.color = '#203ba9';
        div.style.borderBottom= 'solid rgb(226, 219, 219)';
        
    }

}

const applyDarkThemeToElement = () => {
    // Change background color and text color of the current element
    const customDivs = document.querySelectorAll('.home, .home-section,  .projects, .projects-section, .skills, .skills-section, .contacts, .contacts-section, .navbar');

    for (const div of customDivs) {
        div.style.backgroundColor = 'black';
        div.style.color = '#fff';
        div.style.boxShadow = '0 0 10px rgb(255 255 255 / 10%)';
    }

    const navbarElements = document.querySelectorAll('.navbar ul a, .navbar i, .logo');

    
    for (const nav of navbarElements) {
        nav.style.color = '#fff';  // Reset to default
    }

    
}

const applySemiDarkThemeToElement = () => {
    document.body.style.backgroundColor= '#000'
    const customDivs = document.querySelectorAll('.home-card, .skill-card, .project-card, .contact-card, label');

    for (const div of customDivs) {
        div.style.backgroundColor = '#2d2e32';
        div.style.color = '#fff';
    }

    const navCollapseDivs = document.querySelectorAll('.nav-collapse, .nav-collapse ul a');

    for (const div of navCollapseDivs) {
        div.style.backgroundColor = '#2d2e32';
        div.style.color = '#fff';
        div.style.borderBottom= 'solid rgb(57, 57, 57)';
        
    }

}

const darkTheme = ()=>{
    console.log("changed to dark theme");

    // Change background color and text color of body
   

    // Apply the dark theme to all children of the body
    applyDarkThemeToElement();

    applySemiDarkThemeToElement();
}

const toggleTheme = () => {
    isDarkTheme = !isDarkTheme;

    if (isDarkTheme) {
        applyDarkThemeToElement();
        applySemiDarkThemeToElement();
        console.log("changed to dark theme");
    } else {
        applyNormalThemeToElement();
        console.log("changed to normal theme");
    }
}

const icon =  document.getElementsByClassName('theme-change');
for(const ele of icon){
    ele.addEventListener('click',toggleTheme);
}



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

