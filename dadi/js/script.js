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