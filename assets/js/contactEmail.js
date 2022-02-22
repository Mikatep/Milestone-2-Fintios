function sendMail(contactForm) {
    emailjs.send("gmail", "template_5o7ziae", {
        "from_name": contactForm.name.value,
        "industry": contactForm.industry.value,
        "reply_to": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}