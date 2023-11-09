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

// Переключить изображение в модальном окне
function switchImage(offset) {
  const modalImage = document.getElementById("modalImage");
  const currentImageId = getCurrentImageId();
  const currentIndex = parseInt(currentImageId.slice(-1));

  const newIndex = currentIndex + offset;
  const newImageId = "image" + newIndex;

  console.log("Trying to switch to:", newImageId); // Добавьте эту строку для отладки

  // Assuming you have a total of 6 images
  if (newIndex >= 1 && newIndex <= 6) {
    modalImage.src = "img/" + newImageId + ".webp";
  }
}

// Получить текущий идентификатор изображения в модальном окне

function getCurrentImageId() {
  const modalImageSrc = document.getElementById("modalImage").src;
  const matches = modalImageSrc.match(/image(\d+)/);
  return matches ? matches[0] : null;
}

// Закрыть модальное окно, если пользователь щелкает вне изображения
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
