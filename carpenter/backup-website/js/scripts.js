document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_v87ru0n', 'template_4x24gft', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('Message sent successfully!');
        }, function(error) {
           console.log('FAILED...', error);
           alert('Failed to send message. Please try again.');
        });
});
