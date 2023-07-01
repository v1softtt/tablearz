
// Получаем ссылки на кнопку и изображение
var button = document.getElementById("ruda");
var image = document.getElementById("gif1");

// Добавляем обработчик события клика
button.addEventListener("click", function() {
  // Показываем изображение
  image.style.display = "block";

  // Задержка в миллисекундах (например, 3000 мс = 3 секунды)
  var delayInMilliseconds = 2000;

  // Устанавливаем задержку перед скрытием изображения
  setTimeout(function() {
    // Скрываем изображение
    image.style.display = "none";
  }, delayInMilliseconds);
});