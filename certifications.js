document.addEventListener('DOMContentLoaded', function () {
    const certificateImage = document.getElementById('certificate-image');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const certificates = ['cert1.jpg', 'cert2.jpg', 'cert3.jpg'];
    let currentIndex = 0;
    function updateCertificate() {
        certificateImage.src = certificates[currentIndex];
        certificateImage.alt = `Certification ${currentIndex + 1}`;
    }
    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + certificates.length) % certificates.length; 
        updateCertificate();
    });
    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % certificates.length; 
        updateCertificate();
    });
});
