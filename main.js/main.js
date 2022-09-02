



//++++++++++++++++++++++++++++
let count = 0
const slidePic = ()=>{
    
    let i
    let pictures = document.querySelectorAll('.slides')
    for(i = 0; i < pictures.length; i++){
        pictures[i].style.display = 'none'
    }
    count++
    if(count === pictures.length) {count = 0}
    pictures[count].style.display = 'block'
    setTimeout(slidePic, 3500)
}
slidePic()



//--------
let i = 0;
let slideImg = ["../pic/pic13.jpg","../pic/pic12.jpg","../pic/pic11.jpg","../pic/pic10.jpg","../pic/pic6.jpg"]

let slideShow = function () {
    document.simg.src = slideImg[i];

    if (i < slideImg.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideShow()",4000)
}

slideShow()


//..........Sign in Function .......


// function setFormMessage(formElement, type, message) {
//     const messageElement = formElement.querySelector(".form__message");

//     messageElement.textContent = message;
//     messageElement.classList.remove("form__message--success", "form__message--error");
//     messageElement.classList.add(`form__message--${type}`);
// }

// function setInputError(inputElement, message) {
//     inputElement.classList.add("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
// }

// function clearInputError(inputElement) {
//     inputElement.classList.remove("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.querySelector("#login");
//     const createAccountForm = document.querySelector("#createAccount");

//     document.querySelector("#linkCreateAccount").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.add("form--hidden");
//         createAccountForm.classList.remove("form--hidden");
//     });

//     document.querySelector("#linkLogin").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.remove("form--hidden");
//         createAccountForm.classList.add("form--hidden");
//     });

//     loginForm.addEventListener("submit", e => {
//         e.preventDefault();

//         // Perform your AJAX/Fetch login

//         setFormMessage(loginForm, "error", "Invalid username/password combination");
//     });

//     document.querySelectorAll(".form__input").forEach(inputElement => {
//         inputElement.addEventListener("blur", e => {
//             if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
//                 setInputError(inputElement, "Username must be at least 10 characters in length");
//             }
//         });

//         inputElement.addEventListener("input", e => {
//             clearInputError(inputElement);
//         });
//     });
// });