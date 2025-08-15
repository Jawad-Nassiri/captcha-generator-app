const captchaElem = document.querySelector('.captcha'),
  regenerateCaptchaBtn = document.querySelector('.regenerate'),
  confirmBtn = document.querySelector('.confirm'),
  inputElem = document.querySelector('input'),
  toastElem = document.querySelector('.toast'),
  progressElem = document.querySelector('.progress');

let numbers = "0123456789";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "!@#$%^&*()";

let allChars = numbers + lowercase + uppercase + symbols;




const captchaGenerator = () => {

  let generatedCaptcha = '';

  for(let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * allChars.length);
    generatedCaptcha += allChars[randomNum];
  }

  captchaElem.textContent = generatedCaptcha;
}

captchaGenerator();

const confirmCaptchaHandler = () => {
  let enteredCaptcha = inputElem.value.trim();
  if (enteredCaptcha) {
    if(enteredCaptcha === captchaElem.textContent) {

      toastElem.classList.remove('hidden');

      let currentWidth = 0;

      let interval = setInterval(() => {
        currentWidth++;
        progressElem.style.width = currentWidth + 'px';

        if (currentWidth === 360) {
          toastElem.classList.add('hidden');
          clearInterval(interval);
        }
      }, 10);


    } else {
      alert('The entered Captcha code is not correct !');
    }
    
  } else {
    alert('Please enter the Captcha Code !')
  }
}


regenerateCaptchaBtn.addEventListener('click', captchaGenerator);
confirmBtn.addEventListener('click', confirmCaptchaHandler);