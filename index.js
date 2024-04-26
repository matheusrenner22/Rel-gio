function executaPrograma() {
    const data = new Date();
    const display = document.querySelector('.container p');

    const zeroAEsquerda = (num) => {
        return num >= 10 ? num : `0${num}`;
    }

    const ConverteDiaSemanaEmTexto = (diaSemana) => {
        let diaDaSemanaTexto;

        switch (diaSemana) {
            case 0:
                diaDaSemanaTexto = 'Domingo';
                return `${diaDaSemanaTexto}`;
            case 1:
                diaDaSemanaTexto = 'Segunda-feira';
                return `${diaDaSemanaTexto}`;
            case 2:
                diaDaSemanaTexto = 'Terça-feira';
                return `${diaDaSemanaTexto}`;
            case 3:
                diaDaSemanaTexto = 'Quarta-feira';
                return `${diaDaSemanaTexto}`;
            case 4:
                diaDaSemanaTexto = 'Quinta-feita';
                return `${diaDaSemanaTexto}`;
            case 5:
                diaDaSemanaTexto = 'Sexta-feira';
                return `${diaDaSemanaTexto}`;
            case 6:
                diaDaSemanaTexto = 'Sábado';
                return `${diaDaSemanaTexto}`;
            default:
                diaDaSemanaTexto = '';
                break;
        }
    }

    const ConverteMesEmTexto = (mes) => {
        let mesEmTexto;

        switch (mes) {
            case 1:
                mesEmTexto = 'Janeiro';
                return `${mesEmTexto}`;
            case 2:
                mesEmTexto = 'Fevereiro';
                return `${mesEmTexto}`;
            case 3:
                mesEmTexto = 'Março';
                return `${mesEmTexto}`;
            case 4:
                mesEmTexto = 'Abril';
                return `${mesEmTexto}`;
            case 5:
                mesEmTexto = 'Maio';
                return `${mesEmTexto}`;
            case 6:
                mesEmTexto = 'Junho';
                return `${mesEmTexto}`;
            case 7:
                mesEmTexto = 'Julho';
                return `${mesEmTexto}`;
            case 8:
                mesEmTexto = 'Agosto';
                return `${mesEmTexto}`;
            case 9:
                mesEmTexto = 'Setembro';
                return `${mesEmTexto}`;
            case 10:
                mesEmTexto = 'Outubro';
                return `${mesEmTexto}`;
            case 11:
                mesEmTexto = 'Novembro';
                return `${mesEmTexto}`;
            case 12:
                mesEmTexto = 'Dezembro';
                return `${mesEmTexto}`;
            default:
                mesEmTexto = '';
                return mesEmTexto;
        }
    }

    const mostraDiaOuNoite = (hora, minutos) => {
        const am = (hora >= zeroAEsquerda(0)) && (hora <= zeroAEsquerda(11) && minutos <= zeroAEsquerda(59));

        if (am) {
            return `${hora}:${minutos} AM`;
        } else {
            return `${hora}:${minutos} PM`;
        }
    }

    const mostraDataFormatada = (data) => {
        const diaSemana = ConverteDiaSemanaEmTexto(data.getDay());
        const dia = zeroAEsquerda(data.getDate());
        const mes = ConverteMesEmTexto(data.getMonth() + 1);
        const ano = data.getFullYear();
        const hora = zeroAEsquerda(data.getHours());
        const minutos = zeroAEsquerda(data.getMinutes());
        
        display.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} <br> 
        ${mostraDiaOuNoite(hora, minutos)}`;

        display.classList.add('output');
    }

    mostraDataFormatada(data);
}

executaPrograma();