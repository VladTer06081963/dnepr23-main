// Открыть модальное окно с изображением
function openModal(imageId) {
  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = "img/" + imageId + ".webp";
}

// Закрыть модальное окно
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Закрыть модальное окно, если пользователь щелкает вне изображения
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
