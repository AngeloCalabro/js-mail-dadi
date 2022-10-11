let btn = document.querySelector('button');
let dadoUno = document.getElementById('dado-uno')
let dadoDue = document.getElementById('dado-due')
let numeroFacce = 6;

const play = function () {

    for (i = 1; i <= 1; i++) {

        let casualeUno = Math.random() * numeroFacce + 1;
        let casualeDue = Math.random() * numeroFacce + 1;
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
let numeroFacceB = 3;

const playB = function () {

    for (i = 0; i <= 1; i++) {

        let casualeUnoB = Math.random() * numeroFacceB + 1;
        let casualeDueB = Math.random() * numeroFacceB + 1;
        let casualeTreB = Math.random() * numeroFacceB + 1;
        let numeroCasualeUnoB = parseInt(Math.floor(casualeUnoB));
        let numeroCasualeDueB = parseInt(Math.floor(casualeDueB));
        let numeroCasualeTreB = parseInt(Math.floor(casualeTreB));
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
        } else if (numeroCasualeUnoB == numeroCasualeDueB && numeroCasualeTreB != numeroCasualeUnoB) {
            msgb.innerHTML = 'Pareggio tra Player 1 e Player 2';
        } else if (numeroCasualeDueB == numeroCasualeTreB && numeroCasualeTreB != numeroCasualeUnoB) {
            msgb.innerHTML = 'Pareggio tra Player 2 e Player 3';
        } else if (numeroCasualeUnoB == numeroCasualeTreB && numeroCasualeTreB != numeroCasualeDueB) {
            msgb.innerHTML = 'Pareggio tra Player 1 e Player 3';
        } else {
            msgb.innerHTML = 'Pareggio';
        };
    };
};

btnB.addEventListener('click', playB);