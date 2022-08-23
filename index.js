
const errorMsg = document.getElementById("error-msg");
const validMsg = document.getElementById("valid-msg");
const errorIcon = document.getElementById("error-icon");
const validIcon = document.getElementById("valid-icon");

const errorMsgMobile = document.getElementById("error-msg-mobile");
const validMsgMobile = document.getElementById("valid-msg-mobile");
const errorIconMobile = document.getElementById("error-icon-mobile");
const validIconMobile = document.getElementById("valid-icon-mobile");

  
errorIcon.style.display='none';
errorMsg.style.display = 'none';
validMsg.style.display = 'none';
validIcon.style.display= 'none';   

let userInputDesktop = document.getElementById("searchBarInputDesktop")
let userInputMobile = document.getElementById("searchBarInputMobile")


function validateDesktop(e){
  
  errorIcon.style.display='none';
  errorMsg.style.display = 'none';
  validMsg.style.display = 'none';
  validIcon.style.display= 'none';   


  if(!userInputDesktop.value){
    validIcon.style.display= 'none';
    validMsg.style.display = 'none';
    errorMsg.style.display = 'block';
    errorIcon.style.display = 'block';

  }
  else if(userInputDesktop.value){
    errorMsg.style.display = 'none';
    errorIcon.style.display = 'none';
    validMsg.style.display = 'block';
    validIcon.style.display= 'block';
  }
}

function validateMobile(e){
  errorIconMobile.style.display='none';
  errorMsgMobile.style.display = 'none';
  validMsgMobile.style.display = 'none';
  validIconMobile.style.display= 'none';

  if(!userInputMobile.value){
    validIconMobile.style.display= 'none';
    validMsgMobile.style.display = 'none';
    errorMsgMobile.style.display = 'block';
    errorIconMobile.style.display = 'block';

  }
  else if(userInputMobile.value){
    errorMsgMobile.style.display = 'none';
    errorIconMobile.style.display = 'none';
    validMsgMobile.style.display = 'block';
    validIconMobile.style.display= 'block';
  }
  
}