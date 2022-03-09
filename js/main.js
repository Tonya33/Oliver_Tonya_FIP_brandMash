(() => {

  console.log('this is some text');

  let theHeading = document.querySelector("#mainHeader"),
      theLogo = document.querySelector("#logo"),
      HeroImg = document.querySelector("#Hero"),
      

  function logElement() {
    console.log('clicked on the element:', this.id);
  }

  theHeading.addEventListener("click", logElement);

  theLogo.addEventListener('click', logElement);

  HeroImg.addEventListener('click', logElement);


})();
