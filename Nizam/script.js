



function getData() {
    const inputElementName = document.querySelector(".name");
    let inputNameValue = inputElementName.value;
    localStorage.setItem('Name: ', inputNameValue);

    const inputElementEmail = document.querySelector(".email");
    let inputEmailValue = inputElementEmail.value;
    localStorage.setItem('Email: ', inputEmailValue);

    const inputElementMessage = document.querySelector(".message");
    let inputMessageValue = inputElementMessage.value;
    localStorage.setItem('Message: ', inputMessageValue);


}


//----------- EMAIL
function successMail() {
    let symbolMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let userTypeEmail = document.querySelector(".email").value
    let successValid = symbolMail.test(userTypeEmail);
    let messageError = 'incorrect Email !';

    if (successValid == true) {
        document.querySelector(".emailMessage").innerHTML = "";
    } else {
        document.querySelector(".emailMessage").innerHTML = `${messageError}`;
    }
}
setTimeout(() => {
    document.querySelector(".emailMessage").style.display = 'none';
}, 4000)



//----------NAME
function successName() {
    if (document.querySelector(".name").value == "") {
        document.querySelector(".nameMessage").innerHTML = "Enter your name "
    } else {
        document.querySelector(".nameMessage").innerHTML = ""
    }
}
setTimeout(() => {
    document.querySelector(".nameMessage").style.display = 'none';
}, 4000)



//-----------MESSAGE
function successMessage() {
    if (document.querySelector(".name").value == "") {
        document.querySelector(".messageMessage").innerHTML = "Enter your message "
    } else {
        document.querySelector(".messageMessage").innerHTML = ""
    }
}
setTimeout(() => {
    document.querySelector(".messageMessage").style.display = 'none';
}, 4000)