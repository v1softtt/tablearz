// Проверяем, доступно ли локальное хранилище в браузере
if (typeof(Storage) !== "undefined") {
    // Получаем текущее значение баланса из локального хранилища
    var balance = localStorage.getItem("balance");
    
    // Проверяем, было ли уже сохранено значение баланса
    if (balance === null) {
      // Если значение баланса еще не сохранено, устанавливаем его по умолчанию
      balance = 0;
      localStorage.setItem("balance", balance);
    }
    
    // Выводим текущий баланс на страницу
    var balanceElement = document.getElementById("balance");
    balanceElement.textContent = '$' + Number(balance).toLocaleString('en-US');
  
    // Далее вы можете взаимодействовать с балансом, изменяя его значение
    // Например, добавим 10 к текущему балансу и сохраним новое значение
    balance = parseInt(balance) || 0;
    localStorage.setItem("balance", balance);
  
  
    const btnMineClick = document.querySelector('#ruda');
  
    function increaseBalance() {
      var balance = localStorage.getItem("balance");
      var balanceNumber = parseInt(balance) || 0; // Если значение в localStorage не является числом, используем 0
  
      // Увеличиваем баланс на 5000
      balanceNumber += 5000;
      localStorage.setItem("balance", balanceNumber);
  
      // Обновляем отображение баланса с разделением на тысячи
      balanceElement.textContent = '$' + balanceNumber.toLocaleString('en-US');
    }
  
    // Проверяем поддержку локального хранилища
    if (btnMineClick && balanceElement) {
      // Назначаем обработчик клика на кнопку
      btnMineClick.addEventListener('click', increaseBalance);
    } else {
      // Локальное хранилище не поддерживается в данном браузере
      console.log("Извините, локальное хранилище не поддерживается в вашем браузере.");
    }
  }
  
  
  
  // Проверяем, доступно ли локальное хранилище в браузере
  if (typeof Storage !== "undefined") {
    // Получаем текущее значение баланса из локального хранилища
    var balance = localStorage.getItem("balance");
  
    // Проверяем, было ли уже сохранено значение баланса
    if (balance === null) {
      // Если значение баланса еще не сохранено, устанавливаем его по умолчанию
      balance = 0;
      localStorage.setItem("balance", balance);
    }
  
    // Выводим текущий баланс на страницу
    var balanceElement = document.getElementById("balance");
    balanceElement.textContent = "$" + Number(balance).toLocaleString("en-US");
  
    // Проверяем, был ли уже введен промокод
    var promoCodeEntered = localStorage.getItem("promoCodeEntered") === "true";
  
    // Функция для увеличения баланса
    function increaseBalance(amount) {
      var currentBalance = parseInt(balance) || 0;
      var newBalance = currentBalance + amount;
  
      // Обновляем баланс в локальном хранилище
      localStorage.setItem("balance", newBalance);
  
      // Обновляем отображение баланса с разделением на тысячи
      balanceElement.textContent = "$" + newBalance.toLocaleString("en-US");
  
      // Устанавливаем флаг, что промокод уже был введен
      promoCodeEntered = true;
      localStorage.setItem("promoCodeEntered", "true");
    }
  
    // Обработчик события клика на кнопку отправки
    var submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", function () {
      var promoCodeInput = document.getElementById("promoCode");
      var promoCodeValue = promoCodeInput.value;
  
      var myParagraph = document.getElementById("subp");
      
      // Проверяем, был ли уже введен промокод
      if (promoCodeEntered) {
        myParagraph.textContent = "Вы уже ввели промокод";
        return;
      }
  
      // Проверяем введенный промокод и прибавляем 10000 к балансу, если промокод верный
      if (promoCodeValue === "#Vincent") {
        increaseBalance(50000000);
        myParagraph.textContent = "Промокод активирован";
      }
      else if (promoCodeValue != "#Vincent"){
        myParagraph.textContent = "Промокод неверный";
      }
  
      // Очищаем поле ввода промокода
  
    });
  } else {
    // Локальное хранилище не поддерживается в данном браузере
    console.log("Извините, локальное хранилище не поддерживается в вашем браузере.");
  }
  
