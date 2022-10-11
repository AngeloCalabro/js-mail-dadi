let mailInput = document.getElementById('mail');
let btn = document.getElementById('my-btn');

const mailInputClient = ['example1@boolean.com', 'example2@boolean.com', 'example3@boolean.com', 'example4@boolean.com',];
console.log(mailInputClient);

const findMail = function () {
    let mailValue = mailInput.value;
    console.log(mailValue);

    let checkMail = false;

    for (let i = 0; i < mailInputClient; i++) {
        const arrayValue = mailInputClient[i];
        if (mailValue == arrayValue) {
            checkEmail = true;
        }
    }
    if (checkMail) {
        document.getElementById('testo').innerHTML = 'puoi entrare'
    } else {
        document.getElementById('testo').innerHTML = 'non puoi entrare'
    }
    mailInput.value = '';
};

btn.addEventListener('click', findMail);