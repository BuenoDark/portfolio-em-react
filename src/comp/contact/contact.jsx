import "./contact.css"
import Phone from "../../img/telefone.png";
import Email from "../../img/gmail.png";
import Andress from "../../img/endereco.png";
import Git from "../../img/github.png";
import { useRef } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context";



const Contact = () => {
       
        const formRef = useRef();
        const theme = useContext(ThemeContext);
        const darkMode = theme.state.darkMode; 
        const handleSubmit = (e)=> {
            e.preventDefault()
        }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Vamos falar sobre seu projeto?</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                            src={Phone} 
                            alt="" 
                            className="c-icon" />
                            +55 15 9999999
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={Email} 
                            alt="" 
                            className="c-icon" />
                            dev.bueno@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={Andress} 
                            alt="" 
                            className="c-icon" />
                            Av. Paulista, n283  Sorocaba  Sao Paulo
                        </div>
                        <div className="c-info-item">
                            <a href="https://github.com/BuenoDark" target="_blank" rel="noreferrer">
                            <img 
                            src={Git} 
                            alt="" 
                            className="c-icon" /></a>
                            buenoDark
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Lorem spector and me</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.?                        
                    </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nome" name="user_name" />
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Assunto" name="user_subject" />
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Escreva sua mensagem" name="message"></textarea>
                            <button>Enviar</button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Contact