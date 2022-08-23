
const errorMsg = document.getElementById("error-msg");
const validMsg = document.getElementById("valid-msg");
const errorIcon = document.getElementById("error-icon");
const validIcon = document.getElementById("valid-icon");

  
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

  if(!userInputMobile.value){
    validIcon.style.display= 'none';
    validMsg.style.display = 'none';
    errorMsg.style.display = 'block';
    errorIcon.style.display = 'block';

  }
  else if(userInputMobile.value){
    errorMsg.style.display = 'none';
    errorIcon.style.display = 'none';
    validMsg.style.display = 'block';
    validIcon.style.display= 'block';
  }
  
}

// // // set up listener on submit
// // gather elements  
// const forms = document.querySelectorAll('form');
// const errorMsg = document.querySelector('#error-msg');
// const errorIcon = document.querySelector('#error-icon');
// const validIcon = document.querySelector('#valid-icon')

// // set up listener on submit
// if(forms && errorMsg && errorIcon && validIcon) {
//   forms.forEach(form =>{
//     form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     const {email} = data;
//     console.log(data)
//     // do validation
//     if(!input.value) {
//       errorMsg.style.display = 'block'
//       errorIcon.style.display = 'block'
//       validIcon.style.display= 'none'
//     } else {
//       validIcon.style.display= 'block'
//       errorMsg.style.display = 'none'
//       errorIcon.style.display = 'none'
//     }
//   })
//   })
    
// }

