let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const captionText = document.getElementById('caption');

function openModal(index) {
    modal.style.display = 'block';
    currentImageIndex = index;
    showImage(currentImageIndex);
}

function closeModal() {
    modal.style.display = 'none';
}

function changeImage(n) {
    currentImageIndex += n;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showImage(currentImageIndex);
}

function showImage(index) {
    modalImg.src = images[index].src;
    captionText.innerHTML = images[index].alt;
}
