var experienceText = document.querySelector('.practiceInYears');
var experience = 0;
var dateNow = new Date();
var beginPractice = new Date(2005, 0, 1, 2, 3, 4, 567);
experience = dateNow.getFullYear() - beginPractice.getFullYear();
function declarationOfNumbers(number, titles) {
  if(number < 20 && number >10){
    return titles[2];
  }
  switch (number%10){
    case 1:
          return titles[0];
    break;
    case 2:
    case 3:
    case 4:
      return titles[1];
      break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
      return titles[2];
      break;
  }
}

var numberTitle = declarationOfNumbers(experience, ['год', 'года', 'лет']);
if (experience) {
  experienceText.textContent = experience + ' ' + numberTitle;
} else {
  experienceText.textContent = 10 + ' лет';
}

//всплывание второго нав меню
var secondaryNav = document.querySelector('.secondary-nav');
var buttonSecondaryNav = document.querySelector('button.secondary-nav-description');
buttonSecondaryNav.addEventListener('click',function(){
  secondaryNav.classList.toggle('visibleSecondaryNav');
});
//main menu
//всплывание второго нав меню
var mainMenu = document.querySelector('.main-menu');
var buttonOpenMenu= document.querySelector('button.open-menu');
buttonOpenMenu.addEventListener('click',function(){
  mainMenu.classList.toggle('visibleMainMenu');
  // var pattern = document.createElement('div');
  // pattern.classList.add('pattern');
  // document.body.appendChild(pattern);
});
