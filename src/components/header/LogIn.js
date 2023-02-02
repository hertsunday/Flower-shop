import "./LogIn.scss";
import CloseButton from "./svg/CloseButton.svg"
import {useState} from "react";
import axios from "axios";

function LogIn({callFormWindow, formSwitch, logIn}) {
    const [userMessage, setUserMessage] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputs = [{
        type: "email",
        placeHolder: "Електронна адреса",
        func: (e) => setEmail(e.target.value),
        value: email
    }, {
        type: "password",
        placeHolder: "Пароль",
        func: (e) => setPassword(e.target.value),
        value: password
    }]

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email.length && password.length) {
            try {
                const response = await axios.get(`/login?email=${email}&pass=${password}`);

                if(!response.data.answer) {
                    setUserMessage(response.data.message)
                } else {
                    callFormWindow()
                    logIn()
                }
            } catch {
               setUserMessage("Виникла помилка\nСпробуйте пізніше")
            }
        }
    }

    return (
        <div className="log-in">
            <div className="fading" onClick={callFormWindow}></div>
            <form className="log-in-form" onSubmit={handleSubmit}>
                <div className="log-in-form__top">
                    <span className="log-in-form__title">Вхід</span>
                    <div className="log-in-form__close-button" onClick={callFormWindow}>
                        <img className="log-in-form__close-button--svg" src={CloseButton} alt="Close log in form"/>
                    </div>
                </div>
                {inputs.map((el) => <input className="log-in-form__input" value={el.value} onChange={el.func} type={el.type} placeholder={el.placeHolder}/>)}
                <button className="log-in-form__button-login" type="submit">Увійти</button>
                <button className="log-in-form__button-registration" onClick={formSwitch}>Реєстрація</button>
            </form>
            <span className="form-message">{userMessage}</span>
        </div>
    );
}
export default LogIn;