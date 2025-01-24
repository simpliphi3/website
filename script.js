document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const timestamp = new Date().toISOString();

    const subject = `Contact Us request received from: ${firstName} ${lastName}`;
    const body = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}\nTimestamp: ${timestamp}`;

    const mailtoLink = `mailto:kmccord@simpliphillc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});
