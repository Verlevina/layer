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

