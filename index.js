function executaPrograma() {

    const zeroAEsquerda = (num) => {
        return num >= 10 ? num : `0${num}`;
    }

    const verificaPmOuAm = (hora, minutos) => {
        const am = (hora >= zeroAEsquerda(0)) && (hora <= zeroAEsquerda(11));

        if (am) {
            return `${hora}:${minutos} AM`;
        } else {
            return `${hora}:${minutos} PM`;
        }
    }

    const data = new Date();
    const display = document.querySelector('.container p');
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());

    display.innerHTML = `${data.toLocaleDateString('pt-BR', { dateStyle: 'full' })} <br />
    ${verificaPmOuAm(hora, minutos)}`;
    display.classList.add('output');

}

executaPrograma();