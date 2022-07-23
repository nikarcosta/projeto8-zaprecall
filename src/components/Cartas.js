import { useState } from "react";
import setinha from "../assets/img/setinha.png";

export default function Cartas(props){
    
    const {pergunta, resposta, indice, respostaIcon} = props;
    const [etapa, setEtapa] = useState(1);
    const [resultado, setResultado] = useState(null);


    if(etapa === 1){
        return(
            <div className="titulo"><span>Pergunta {indice}</span><div className="ionicon" onClick={() => setEtapa(2)}><ion-icon name="play-outline"></ion-icon></div></div>
        );
    }

    if(etapa === 2){
        return(
            <div className="pergunta"><span>{pergunta}</span><div className="setinha" onClick={() => setEtapa(3)}><img src={setinha} alt="setinha" /></div></div>
        );
    }

    if(etapa === 3){
        return(
            <div className="resposta">
                <span>{resposta}</span>
                <div className="botoes">
                    <button className="esqueci" onClick={() => {
                        setResultado("errou");
                        respostaIcon("close-circle");
                        setEtapa(4);
                    }}>
                        <span>Não <br />lembrei</span>
                    </button>
                    <button className="quase-esqueci" onClick={() => {
                        setResultado("quase nao acertou");
                        respostaIcon("help-circle");
                        setEtapa(4);
                    }}>
                        <span>Quase não lembrei</span>
                    </button>
                    <button className="lembrei" onClick={() => {
                        setResultado("acertou");
                        respostaIcon("checkmark-circle");
                        setEtapa(4);
                    }}>
                        <span>Zap!</span>
                    </button>
                </div>
            </div>

        );
    }

    if(etapa === 4){

        if(resultado === "errou"){
            return(
                <div className="titulo errou"><span>Pergunta {indice}</span><div className="ionicon"><ion-icon name="close-circle"></ion-icon></div></div>
            );
        }

        if(resultado === "quase nao acertou"){
            return (
                <div className="titulo quase"><span>Pergunta {indice}</span><div className="ionicon"><ion-icon name="help-circle"></ion-icon></div></div>
            );
        }

        if(resultado === "acertou"){
            return(
                <div className="titulo acertou"><span>Pergunta {indice}</span><div className="ionicon"><ion-icon name="checkmark-circle"></ion-icon></div></div>
            );
        }

    }



}
