(() => {
  console.log('Welcome to my Final Brand mash-up project!');

    let  theLogo = document.getElementById('logo'),
        paws = document.querySelectorAll(".paw"),
        mainNav = document.getElementById('mainNav'),
        bottle = document.querySelector('.bottleIMG'),
        noBtn = document.getElementById('NO');

  function logElement() {
    console.log('clicked on the element:', this.id);
  }

  function pawInfo() {
    console.log('This is the paw element! this is the main design component of the brand mash-up. I took the shape of the "Tyskie beer" crown element and changed it to a paw print to relate to the "Resolve pet cleaner"');
  }
  function logbottle() {
    console.log('clicked on the element: RESOLVE Bottle');
  }
  function sorryMsg() {
    console.log('Sorry! you are not old enough to eneter this site');
  }

  theLogo.addEventListener("click", logElement);
  mainNav.addEventListener("click", logElement);

  paws.forEach(paw => paw.addEventListener('click', pawInfo));

  bottle.addEventListener("click", logbottle);
  noBtn.addEventListener("click", sorryMsg);

})();
