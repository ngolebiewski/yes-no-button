
const yesWord = new SpeechSynthesisUtterance("yes");
const noWord = new SpeechSynthesisUtterance("no");
let yesCount = 0;
let noCount = 0;

// const main = document.querySelector(`main`);

const yesButton = document.querySelector(`#yes-circle`);
yesButton.addEventListener(`click`, (e) => {
  speechSynthesis.speak(yesWord);
  yesCount++;
  footer.innerHTML = `YES: ${yesCount} NO: ${noCount}`
})

const noButton = document.querySelector(`#no-circle`);
noButton.addEventListener(`click`, (e) => {
  speechSynthesis.speak(noWord);
  noCount++;
  footer.innerHTML = `YES: ${yesCount} NO: ${noCount}`
})

const footer = document.querySelector(`footer`);
footer.innerHTML = `YES: ${yesCount} NO: ${noCount}`