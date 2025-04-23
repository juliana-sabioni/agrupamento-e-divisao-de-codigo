import './style.css';
import { pegarDados } from './api.js';
console.log ('App iniciando');

pegarDados().then(dados => {
        console.log('Dados recebidos: ', dados)
    }
);

const botao = document.createElement('button');
botao.textContent = 'Carregar Saudação';
document.body.appendChild(botao);

botao.addEventListener('click', async () => {
    const {saudacao} = await import ('./utils.js');
    alert (saudacao('Visitante'))
});
