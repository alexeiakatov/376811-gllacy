
//кнопка обратной связи в инф.блоке на карте
var feedbackButton = document.querySelector(".feedbackButton");

//темный слой с формой обратной связи
var dark = document.querySelector(".darkLayer");

//кнопка закрытия попапа обратной связи "крестик"
var closeFormButton = document.querySelector(".closeFormButton");

//поле ввода имени клиента
var clientName = dark.querySelector(".clientName");

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

  dark.classList.add("hidden");
});

    /*закрытие попапа обратной связи или интеракт. карты по нажатию Esc - событие объекта window*/
window.addEventListener("keydown", function (escEvent) {
  if(escEvent.keyCode === 27){

    if(!dark.classList.contains("hidden")) {
      dark.classList.add("hidden");
    }

    if(!interactiveMap.classList.contains("hidden")){
      interactiveMap.classList.add("hidden");
    }
  }

});

    /*показать интерактивную карту*/
mapImage.addEventListener("click", function(clickEvent){
  clickEvent.preventDefault();

  if(interactiveMap.classList.contains("hidden")){
    interactiveMap.classList.remove("hidden");
  }

});


