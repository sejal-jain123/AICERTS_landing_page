function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

function previousImage() {
    // Logic for previous image action
    alert("Previous image clicked");
}

function nextImage() {
    // Logic for next image action
    alert("Next image clicked");
}

function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    answers[index].classList.toggle('active');
}