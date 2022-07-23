import logo from "../assets/img/logo-pequeno.png";

export default function Cabecario(){
    return(
        <header><div className="cabecario"><img src={logo} alt="logo-pequeno" /><span>ZapRecall</span></div></header>
    );
}