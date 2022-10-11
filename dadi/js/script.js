let btn = document.querySelector('button');
const play = function () {
    let dadoUno = document.getElementById('dado-uno')
    let dadoDue = document.getElementById('dado-due')
    for (i = 1; i <= 1; i++) {
        let casualeUno = Math.random() * 6;
        let casualeDue = Math.random() * 6;
        let numeroCasualeUno = Math.floor(casualeUno);
        let numeroCasualeDue = Math.floor(casualeDue);
        dadoUno.innerHTML = numeroCasualeUno;
        dadoDue.innerHTML = numeroCasualeDue;
        console.log(numeroCasualeUno, numeroCasualeDue);

        let messaggio = document.querySelector('p');
        if (numeroCasualeUno = numeroCasualeDue) {
            messaggio.innerHTML = 'Pareggio!'
        } else if (numeroCasualeUno > numeroCasualeDue) {
            messaggio.innerHTML = 'Ha vinto il player 1!'
        } else if (numeroCasualeUno < numeroCasualeDue) {
            messaggio.innerHTML = 'Ha vinto il player 2!'
        };

    };

};
btn.addEventListener('click', play);