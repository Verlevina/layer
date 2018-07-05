var experienceText = document.querySelector('.practiceInYears');
var experience = 0;
var dateNow = new Date();
var beginPractice = new Date(2005, 0, 1, 2, 3, 4, 567);
experience = dateNow.getFullYear() - beginPractice.getFullYear();

function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

var numberTitle = declOfNum(experience, ['год', 'года', 'лет']);
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
