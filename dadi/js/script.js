let btn = document.querySelector('button');
let dadoUno = document.getElementById('dado-uno')
let dadoDue = document.getElementById('dado-due')
let numeroFacce = 6;

const play = function () {

    for (i = 1; i <= 1; i++) {

        let casualeUno = Math.random() * numeroFacce;
        let casualeDue = Math.random() * numeroFacce;
        let numeroCasualeUno = Math.floor(casualeUno);
        let numeroCasualeDue = Math.floor(casualeDue);
        dadoUno.innerHTML = numeroCasualeUno;
        dadoDue.innerHTML = numeroCasualeDue;
        console.log(numeroCasualeUno, numeroCasualeDue);

        let msg = document.querySelector('p')
        if (numeroCasualeUno < numeroCasualeDue) {
            msg.innerHTML = 'Ha vinto il player 2!'
        } else if (numeroCasualeUno > numeroCasualeDue) {
            msg.innerHTML = 'Ha vinto il player 1!'
        } else {
            msg.innerHTML = 'Pareggio!'
        };

    };

};
btn.addEventListener('click', play);

let btnB = document.getElementById('btn-b');
let dadoUnoB = document.getElementById('dado-unob')
let dadoDueB = document.getElementById('dado-dueb')
let dadoTreB = document.getElementById('dado-treb')
let numeroFacceB = 6;

const playB = function () {

    for (i = 1; i <= 1; i++) {

        let casualeUnoB = Math.random() * numeroFacceB;
        let casualeDueB = Math.random() * numeroFacceB;
        let casualeTreB = Math.random() * numeroFacceB;
        let numeroCasualeUnoB = Math.floor(casualeUnoB);
        let numeroCasualeDueB = Math.floor(casualeDueB);
        let numeroCasualeTreB = Math.floor(casualeTreB);
        dadoUnoB.innerHTML = numeroCasualeUnoB;
        dadoDueB.innerHTML = numeroCasualeDueB;
        dadoTreB.innerHTML = numeroCasualeTreB;
        console.log(numeroCasualeUnoB, numeroCasualeDueB, numeroCasualeTreB);

        let msgb = document.getElementById('p-b')
        if (numeroCasualeDueB > numeroCasualeTreB && numeroCasualeDueB > numeroCasualeUnoB) {
            msgb.innerHTML = 'Ha vinto il player 2!';
        } else if (numeroCasualeUnoB > numeroCasualeDueB && numeroCasualeUnoB > numeroCasualeTreB) {
            msgb.innerHTML = 'Ha vinto il player 1!';
        } else if (numeroCasualeTreB > numeroCasualeDueB && numeroCasualeTreB > numeroCasualeUnoB) {
            msgb.innerHTML = 'Ha vinto il player 3!';
        } else if (numeroCasualeUnoB == numeroCasualeDueB) {
            msgb.innerHTML = 'Pareggio tra Player 1 e Player 2';
        } else if (numeroCasualeDueB == numeroCasualeTreB) {
            msgb.innerHTML = 'Pareggio tra Player 2 e Player 3';
        } else if (numeroCasualeUnoB == numeroCasualeTreB) {
            msgb.innerHTML = 'Pareggio tra Player 1 e Player 3';
        } else {
            msgb.innerHTML = 'Pareggio';
        };
    };
};

btnB.addEventListener('click', playB);