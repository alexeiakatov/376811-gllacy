
//кнопка обратной связи в инф.блоке на карте
var feedbackButton = document.querySelector(".feedbackButton");

//темный слой с формой обратной связи
var dark = document.querySelector(".darkLayer");

//кнопка закрытия попапа обратной связи "крестик"
var closeFormButton = document.querySelector(".closeFormButton");

//Контейнер попапа обратной связиэлемент div.feedback
var feedback = document.querySelector(".feedback");

//Форма ввода в попапе - элемент form.feedbackform
var feedbackForm = document.querySelector(".feedbackForm");

//Кнопка submit в форме попапа
var popupSubmitButton = document.querySelector(".feedbackForm .button");

//поля ввода имени, эл.почты и сообщения
var clientName = dark.querySelector(".clientName");
var clientEmail = dark.querySelector(".clientEmail");
var clientMessage = dark.querySelector(".getMessage");

//поля ввода поиска, логина, пароля и эл.почты для подписки на рассылку
var searchField = document.querySelector(".searchField");
var login = document.querySelector(".login");
var password = document.querySelector(".password");
var inputEmail = document.querySelector(".inputEmail");

//ссылка с изображением обычной карты div.mapImage
var mapImage = document.querySelector(".mapImage");

//интерактивная карта
var interactiveMap = document.querySelector(".interactiveMap");


    /*событие клика на кнопку "Форма обратной связи" в информационном блоке катры*/
feedbackButton.addEventListener("click", function(clickEvent){
  clickEvent.preventDefault();

  dark.classList.remove("hidden");
  clientName.focus();
});

    /*событие клика на крестик - кнопку закрытия формы обратной связи*/
closeFormButton.addEventListener("click", function (clickEvent) {
  clickEvent.preventDefault();

  if(feedback.classList.contains("inputError")){
    feedback.classList.remove("inputError");
  }
  dark.classList.add("hidden");
});

    /*закрытие попапа обратной связи по нажатию Esc - событие объекта window*/
window.addEventListener("keydown", function (escEvent) {
  if(escEvent.keyCode === 27){

    if(!dark.classList.contains("hidden")) {

      if(feedback.classList.contains("inputError")){
        feedback.classList.remove("inputError");
      }
      dark.classList.add("hidden");
    }
  }

});


    /*проверка введенных данных в попапе*/
popupSubmitButton.addEventListener("click", function(submitEvent){

  clientName.removeAttribute("required");
  clientEmail.removeAttribute("required");
  clientMessage.removeAttribute("required");

  var name = clientName.value;
  var email = clientEmail.value;
  var message = clientMessage.value;

  if (name && email && message) {
  } else{
    submitEvent.preventDefault();
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("inputError");
  }

    clientName.setAttribute("required","");
    clientEmail.setAttribute("required","");
    clientMessage.setAttribute("required","");
});


    /*ОБРАБОТКА СОБЫТИЙ ПОЛУЧЕНИЯ ФОКУСА ЭЛЕМЕНТАМИ ВВОДА*/

//поле clientName
clientName.addEventListener("focus", function(focusEvent){
  clientName.removeAttribute("placeholder");
});
clientName.addEventListener("blur", function(blurEvent) {
  clientName.setAttribute("placeholder", "Как вас зовут?");
});

//поле clientEmail
clientEmail.addEventListener("focus", function(focusEvent){
  clientEmail.removeAttribute("placeholder");
});
clientEmail.addEventListener("blur", function(blurEvent) {
  clientEmail.setAttribute("placeholder", "Ваша почта для ответа?");
});

//поле getMessage
clientMessage.addEventListener("focus", function(focusEvent){
  clientMessage.removeAttribute("placeholder");
});
clientMessage.addEventListener("blur", function(blurEvent) {
  clientMessage.setAttribute("placeholder", "Напишите что-нибудь...");
});

//поле searchField
searchField.addEventListener("focus", function(focusEvent){
  searchField.removeAttribute("placeholder");
});
searchField.addEventListener("blur", function(blurEvent) {
  searchField.setAttribute("placeholder", "Что ищем?");
});

//поле login
login.addEventListener("focus", function(focusEvent){
  login.removeAttribute("placeholder");
});
login.addEventListener("blur", function(blurEvent) {
  login.setAttribute("placeholder", "Электронная почта");
});

//поле password
password.addEventListener("focus", function(focusEvent){
  password.removeAttribute("placeholder");
});
password.addEventListener("blur", function(blurEvent) {
  password.setAttribute("placeholder", "Пароль");
});

//поле inputEmail
inputEmail.addEventListener("focus", function(focusEvent){
  inputEmail.removeAttribute("placeholder");
});
inputEmail.addEventListener("blur", function(blurEvent) {
  inputEmail.setAttribute("placeholder", "Электронная почта");
});
