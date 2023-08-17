const btn = document.getElementById("btn-submit")

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();


    const serviceID = "service_m7t9lj7"
    const templateID = "template_bvnk0t5"


    emailjs.sendForm(serviceID, templateID, this)
        .then(function () {
            console.log('SUCCESS!');
        }, function (error) {
            console.log('FAILED...', error);
        });
});
