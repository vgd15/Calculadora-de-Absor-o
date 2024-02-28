import React, { useState } from "react";
import './calculadora.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Calculadora() {
const [nUsuario, setNUsuario] = useState('');
const [nCliques, setNCliques] = useState('');
const [taxaDeAbsorcao, setTaxaDeAbsorcao] = useState(null);
const [inputClicado, setInputClicado] = useState(null);
/*função que é chamada quando quando o valor do input de usuários ('input1') é alterado. Ela atualiza o estado 'nUsuario'
com o novo valor do inpput*/
const handleInputChange = (event) => {
        setNUsuario(event.target.value);
};
/*função que é chamada quando quando o valor do input de usuários ('input2') é alterado. Ela atualiza o estado 'nCliques'
com o novo valor do inpput*/
const handleInputChangeCliques = (event) => {
        setNCliques(event.target.value);
};
//Função chamada quando o botão é clicado
const handleButtonClick = (valor) => {
/*Verifica qual input foi clicado e atualiza o estado correspondente*/
        if (inputClicado === 'input1') {
            setNUsuario(nUsuario + valor);
        }else if (inputClicado === 'input2') {
            setNCliques(nCliques + valor);
        }
};
/*Função chamada quando um dos inputs é clicado */
const handleInputClick = (inputId) => {
        setInputClicado(inputId);
};
const handleSubmit = (event) => {
        event.preventDefault();
const elemento = document.querySelector('.calculadora-geral');
        const taxa = (parseFloat(nUsuario) * 100) / parseFloat(nCliques);
        if (taxa < 70) {
            setTaxaDeAbsorcao(`Sua taxa de absorção está em estado crítico: ${taxa}%`);
        let piscar = false;
        const interval = setInterval(() => {
if (piscar) {
elemento.style.backgroundColor = 'red'; // Cor de fundo alternativa
} else{
elemento.style.backgroundColor = 'rgb(175, 175, 175)'; // Cor de fundo padrão
}
piscar = !piscar;
       }, 400); // Intervalo de tempo de 500 milissegundos
       // Parar o piscar após 5 segundos (opcional, ajuste conforme necessário)
        setTimeout(() => {
        clearInterval(interval);
        elemento.style.backgroundColor = 'rgb(175, 175, 175)'; // Resetando a cor de fundo padrão
        }, 15000); // Tempo para parar o piscar após x segundos
        const input = document.querySelector('input'); // Substitua pelo seletor do seu input
        input.addEventListener('click', () => {
        if (interval) {
            clearInterval(interval); // Parar o intervalo de piscar se estiver em execução
            elemento.style.backgroundColor = 'rgb(175, 175, 175)'; // Resetar a cor de fundo para padrão
        }
        });
        } else if (taxa > 70 ){
            setTaxaDeAbsorcao(`Sua taxa de absorção é: ${taxa}%`);
        elemento.style.backgroundColor = 'rgb(175, 175, 175)'; // Cor de fundo padrão
        } else{
            setTaxaDeAbsorcao(`Por favor, digite um número!`);
        }
        setNUsuario("");
        setNCliques("");
};
return (
<div className="container d-flex justify-content-center align-items-center flex-column">
   <h1>Calcule sua taxa de absorção</h1>
   <div className="calculadora-geral">
      <div className="col-12">
         <div className="col-12">
            <form onSubmit={handleSubmit}>
               <div className="entrada-dados">
                  <label>
                     <p> Número de cliques: </p>
                     <input
                        id="input2"
                        type="text"
                        value={nCliques}
                        onChange={handleInputChangeCliques}
                        onClick={() => handleInputClick('input2')}
                     placeholder="0"
                     />
                  </label>
                  <br />
                  <label className="d-flex align-items-baseline">
                     <p>Número de usuários:</p>
                     <input
                        id="input1"
                        type="text"
                        value={nUsuario}
                        onChange={handleInputChange}
                        onClick={() => handleInputClick('input1')}
                     placeholder="0"
                     />
                  </label>
               </div>
               <br />
               <div className="botao-calculadora col-12 row justify-content-center">
                  <div className="numeros col-10 pb-4">
                     <div className="d-flex">
                        <button className="botao col-4" type="button" onClick={() => handleButtonClick('1')}>1</button>
                        <button className="botao col-4" type="button" value="2" onClick={() => handleButtonClick('2')}>2</button>
                        <button className="botao col-4" type="button" value="3" onClick={() => handleButtonClick('3')}>3</button>
                     </div>
                     <div className="d-flex">
                        <button className="botao col-4" type="button" value="4" onClick={() => handleButtonClick('3')}>4</button>
                        <button className="botao col-4" type="button" value="5" onClick={() => handleButtonClick('4')}>5</button>
                        <button className="botao col-4" type="button" value="1" onClick={() => handleButtonClick('5')}>6</button>
                     </div>
                     <div className="d-flex">
                        <button className="botao col-4" type="button" value="6" onClick={() => handleButtonClick('7')}>7</button>
                        <button className="botao col-4" type="button" value="7" onClick={() => handleButtonClick('8')}>8</button>
                        <button className="botao col-4" type="button" value="8" onClick={() => handleButtonClick('9')}>9</button>
                     </div>
                     <div className="d-flex ">
                        <button className="botao col-4" type="button" value="0" onClick={() => handleButtonClick('0')}>0</button>
                        <button className="botao col-4" type="button" value="." onClick={() => handleButtonClick('.')}>.</button>
                        <button className="botao col-4" type="submit">=</button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
   <div className="resultado">
      {taxaDeAbsorcao && <span>{taxaDeAbsorcao}</span>}
   </div>
</div>
);
}
export default Calculadora;