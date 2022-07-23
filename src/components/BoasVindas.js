import logo from "../assets/img/logo.png";

export default function BoasVindas({setTela}){
    
    return(
        <div className="boas-vindas">
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div className="nome-app"><span>ZapRecall</span></div>
            <button className="iniciar-app" onClick={() => setTela("tela")}>Iniciar Recall!</button>
        </div>
    );
    
}