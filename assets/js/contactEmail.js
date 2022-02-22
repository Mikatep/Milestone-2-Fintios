function sendMail(contactForm) {
    emailjs.send("gmail", "Fintios", {
        "from_name": contactForm.name.value,
        "reply_to": contactForm.email.value,
        "industry": contactForm.industry.value,
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