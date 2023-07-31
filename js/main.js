window.onload = function() {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
  setInterval(function() {
        preloader.classList.add('preloader-hidden');
  }, 990);
}


const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;
if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  });
}
var iconPost = document.querySelector('.icon-post');
var shareText = document.querySelector('.fa');



function addText1() {
  var input1 = document.getElementById("inputchat");
  var textorel = "/orel ";
  input1.value = textorel;
}


function addText2() {
  var input1 = document.getElementById("inputchat");
  var textreshka = "/reshka ";
  input1.value = textreshka;
}

// Проверяем, доступно ли локальное хранилище в браузере
if (typeof(Storage) !== "undefined") {
  // Получаем текущее значение баланса из локального хранилища
  var balance = localStorage.getItem("balance");
  
  // Выводим текущий баланс на страницу
  var balanceElement = document.getElementById("balance");
  balanceElement.textContent = '$' + Number(balance).toLocaleString('en-US');

  var balanceElement11 = document.getElementById("balance2");
  balanceElement11.textContent = '$' + Number(balance).toLocaleString('en-US');

}



var balanceElement2 = document.getElementById('replic');
var button2 = document.getElementById('btncha'); 

// Функция для проверки баланса
function checkBalance() {
  var balance = parseInt(localStorage.getItem('balance'));
  
  var balanceElement2 = document.getElementById("balance2");
  balanceElement2.textContent = '$' + Number(balance).toLocaleString('en-US');

  // Проверка баланса и вывод сообщения
  if (balance === 0) {
    var balanceElement3 = document.getElementById('replic');
    balanceElement3.textContent = 'Сходи на шахту и приходи снова';
  }

}

// Обработчик события нажатия на кнопку
button2.addEventListener('click', function (event) {
  checkBalance();
});





var input = document.getElementById("inputchat");
var button = document.getElementById("btncha");

// Добавляем обработчик события нажатия клавиши
input.addEventListener("keyup", function(event) {
  // Проверяем, является ли нажатая клавиша "Enter" (код 13)
  if (event.keyCode === 13) {
    // Нажимаем кнопку
    chatstart();
  checkBalance();

  }

});





function chatstart() {



  var inputchat = document.getElementById("inputchat");
  var text = inputchat.value;

  // Получение баланса пользователя из локального хранилища
  var balance = parseInt(localStorage.getItem("balance")) || 0;

  // Константы для результатов
  var HEADS = "Орёл";
  var TAILS = "Решка";

  // Функция для отправки сообщения
  function sendMessage(message) {
    console.log(message);
  }
 



  var vibor = document.getElementById("vibor1");
  vibor.textContent = "Вы предложили сыграть Vincent_Walton сыграть в игру Орел и Решка";



  // Функция для размещения ставки
  function placeBet(command, betAmount) {
    if (isNaN(betAmount) || betAmount <= 0) {
      sendMessage("Некорректная сумма ставки.");
      return;
    }
    if (betAmount > balance) {
      return;
    }

    var result = flipCoin();
    var winAmount = betAmount;

    if (command === "/orel") {
      if (result === HEADS) {
        balance += winAmount;
        var vibor = document.getElementById("vibor");
        vibor.innerHTML = 'Ставка: <span style="color: #eaff4b;"> $' + winAmount + '</span> вы выбрали Орел';



        var win = document.getElementById("win");
        win.innerHTML = '<span style="color: #43ff6f;">Вы выиграли</span>';


        var youLoseElement = document.getElementById("youwin1");
        youLoseElement.innerHTML = '<span class="fade-in">YOU WIN</span>';




          if (winAmount >= 5000000){
            balanceElement2.textContent = 'повезло повезло...';
          }
        
          

      } else {
        balance -= winAmount;
        var win = document.getElementById("win");
        win.innerHTML = '<span style="color: red;">Вы проиграли </span>';


       
        var youLoseElement = document.getElementById("youwin1");
        youLoseElement.innerHTML = '<span style="color: red;" class="fade-in">YOU LOSE</span>';



          if (winAmount >= 5000000){
            balanceElement2.textContent = 'Сюдаа';
          }
      }
    } else if (command === "/reshka") {
      if (result === TAILS) {
        balance += winAmount;
        sendMessage("Вы выиграли " + winAmount + " монет. Результат: " + result);
        var win = document.getElementById("win");
        win.innerHTML = '<span style="color: #43ff6f;">Вы выиграли</span>';
        var youLoseElement = document.getElementById("youwin1");
        youLoseElement.innerHTML = '<span class="fade-in">YOU WIN</span>';

        if (winAmount >= 5000000){
          balanceElement2.textContent = 'повезло повезло...';
        }
      } else {
        balance -= winAmount;
        var win = document.getElementById("win");
        win.innerHTML = '<span style="color: red;">Вы проиграли</span>';
        var youLoseElement = document.getElementById("youwin1");
        youLoseElement.innerHTML = '<span style="color: red;" class="fade-in">YOU LOSE</span>';
        var vibor = document.getElementById("vibor");
        vibor.textContent = "Ставка: "+ winAmount + " вы выбрали Решка";
        if (winAmount >= 5000000){
          balanceElement2.textContent = 'Сюдаа';
        }
        
      }
    } else {
      return;
    }

    localStorage.setItem("balance", balance); // Обновление баланса в локальном хранилище
    balanceElement.textContent = "$" + Number(balance).toLocaleString("en-US");
    var viborres = document.getElementById("viborres");
    viborres.textContent = " Vincent_Walton поймал монетку... выпал[a] " + result;
  }

  // Функция для генерации случайного результата
  function flipCoin() {
    return Math.random() < 0.5 ? HEADS : TAILS;
  }

  // Вызываем функцию размещения ставки при отправке сообщения
  placeBet(text.split(" ")[0].toLowerCase(), parseInt(text.split(" ")[1]));
  
}








