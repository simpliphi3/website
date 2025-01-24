document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:kmccord@simpliphi.com?subject=Contact%20Form%20Submission&body=First%20Name:%20${encodeURIComponent(firstName)}%0D%0ALast%20Name:%20${encodeURIComponent(lastName)}%0D%0AEmail:%20${encodeURIComponent(email)}%0D%0AMessage:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
});
