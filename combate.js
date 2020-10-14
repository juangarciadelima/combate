function combateAtaque(ataque, defensor) {

    let coisa = (ataque.ataque + ataque.arma.bonus - defensor.defesa - defensor.escudo.bonus)
    if (defensor > ataque) {
        return 0
    }

    else {
        return coisa
    }




}
function VerificaSeDeuCerto(cenario, resultadoEsperado, ataque, defensor) {

    const resultadoAtaque = combateAtaque(ataque, defensor)
    if (resultadoAtaque == resultadoEsperado) {
        console.log(cenario + ' Acertou!! ' + resultadoAtaque)
    }
    else {
        console.log(cenario + ' Errouu!! ' + resultadoAtaque)
    }
}



VerificaSeDeuCerto('00. ', 1, { ataque: 0, arma: { bonus: 1 } }, defensor = { defesa: 0, escudo: { bonus: null } })
VerificaSeDeuCerto('01. ', 8, { ataque: 9, arma: { bonus: null } }, { defesa: 1, escudo: { bonus: null } })
VerificaSeDeuCerto('02. ', 0, { ataque: 1, arma: { bonus: null } }, { defesa: 9, escudo: { bonus: null } })
VerificaSeDeuCerto('03. ', 2, { ataque: 0, arma: { bonus: 2 } }, { defesa: 0, escudo: { bonus: null } })
VerificaSeDeuCerto('04.', 5, { ataque: 3, arma: { bonus: 2 } }, { defesa: 0, escudo: { bonus: null } })
VerificaSeDeuCerto('05. ', 4, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: null } })
VerificaSeDeuCerto('06. ', 3, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: 1 } })
VerificaSeDeuCerto('07. ', 2, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: 2 } })
VerificaSeDeuCerto('08. ', 0, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: 5 } })
VerificaSeDeuCerto('09. ', 9, { ataque: 9, arma: { bonus: 9 } }, { defesa: 5, escudo: { bonus: 4 } })









