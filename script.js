const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 130);  // When the user scrolls, it toggles a CSS class called "sticky" on the header element
});

let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".nav");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    nav.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    nav.classList.remove("open");
}; 

// Type JS
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.multiple-text', {
        strings: ["Full-Stack Developer!"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});


// function sendEmail() {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "khushi.tce21@sot.pdpu.ac.in",
//         Password : "**********",
//         To : 'khushitekwani1@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : document.getElementById("subject").value,
//         Body : "Name: " + document.getElementById("yourname").value +
//                "<br> Message: " + document.getElementById("text").value
//     }).then(
//       message => alert("Mail Sent Succfesfully")
//     );
// }

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('text')
      emailjs.init("pKAu8neiJ9ydiT7TI"); // Your public key

const sendEmail = (e) =>{
    e.preventDefault()
    //service id, template id, template params
    emailjs.sendForm('service_b840wfn','template_mv9bfdy',"#contact-form",'pKAu8neiJ9ydiT7TI')
    .then(() => {
        contactMessage.textContent='✅ Message sent successfully'
        //remove the message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent=''
        },5000)

        //reset the form
        contactForm.reset()

    }, () => {
        contactMessage.textContent='❌ Message not sent (server error)'
    })
}
contactForm.addEventListener('submit', sendEmail)


function validateForm() {
    var emailInput = document.forms["contact-form"]["email"];

    var email = emailInput.value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email is valid
    if (!emailPattern.test(email)) {
       // If the email is not valid, show an error message
       var errorMessage = "Please enter a valid email address.";
       var contactMessage = document.getElementById("text");
       contactMessage.innerHTML = errorMessage;
       contactMessage.style.color = "red";
       return false; // Prevent form submission
    }

    // If the email is valid, clear any previous error messages (if any)
    var contactMessage = document.getElementById("text");
    contactMessage.innerHTML = "";

    // Allow form submission
    return true;
 }