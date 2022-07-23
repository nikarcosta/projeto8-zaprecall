import React from "react";
import { useState } from "react";
import Cartas from "./Cartas";
import sadEmoji from "../assets/img/sad.png";
import partyEmoji from "../assets/img/party.png";

const perguntas = [
    {
        pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"
    },
    {
        pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"
    },
    {
        pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"
    },
    {
        pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes"
    },
    {
        pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
]

  


export default function Conteudo({setTela}){
    
    const [questoes, setQuestoes] = useState([]);
    const flashcards = renderizarFlashcards();
    const [numAcertos, setNumAcertos] = useState([]);
    const resultadoFooter = renderizarFooter();

    function renderizarFlashcards(){
        if(questoes.length === 0){
            perguntas.sort((a,b) => Math.random() - 0.5);
            setQuestoes([...perguntas]);
            return<></>
        }else{
            return questoes.map((questao, indice) => {
                const {pergunta, resposta} = questao;
                return <Cartas 
                    key = {indice}
                    pergunta = {pergunta}
                    resposta = {resposta}
                    indice = {indice + 1}
                    respostaIcon = {numAcerto => setNumAcertos([...numAcertos, numAcerto])}
                />
            })
        }
    }

    function renderizarFooter(){

        if(numAcertos.length !== questoes.length){
            return(
                <>
                    <span>{numAcertos.length}/{questoes.length} CONCLUÍDOS</span>
                    <div className="status">
                        {
                            numAcertos.map(respostaIcon => <div className={`ionicon-footer ${respostaIcon}`}><ion-icon name={respostaIcon}></ion-icon></div>)
                        }
                    </div>

                </>
            );
        }
        else{
            for(let i = 0; i < numAcertos.length; i++){
                if(numAcertos[i] === "close-circle"){
                    return(
                        <>
                            <div><img src={sadEmoji} alt="sadEmoji" /><span>Putz</span></div>
                            <span>Ainda faltam alguns... <br /> Mas não desanime!</span>
                            <span>{numAcertos.length}/{questoes.length} CONCLUÍDOS</span>
                            <div className="status">
                                {
                                    numAcertos.map(respostaIcon => <div className={`ionicon-footer ${respostaIcon}`}><ion-icon name={respostaIcon}></ion-icon></div>)
                                }
                            </div>
                        </>
                    );
                }
            }

            return(
                <>
                    <div><img src={partyEmoji} alt="partyEmoji" /><span>Parabéns</span></div>
                    <span>Você não esqueceu de <br />nenhum flashcard!</span>
                    <span>{numAcertos.length}/{questoes.length} CONCLUÍDOS</span>
                    <div className="status">
                        {
                            numAcertos.map(respostaIcon => <div className={`ionicon-footer ${respostaIcon}`}><ion-icon name={respostaIcon}></ion-icon></div>)
                        }
                    </div>
                </>
            );
        }
    }
    
    
    
    return(
        <>
        <main>
            <div className="container-perguntas">
                {flashcards}
            </div>
        </main>
        <footer>
            {resultadoFooter}
        </footer>
        </>
    );
}