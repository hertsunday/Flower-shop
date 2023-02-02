import "./LogIn.scss";
import CloseLogIn from "./svg/CloseButton.svg"
import {useState} from "react";

const inputs = [{
        name: "name",
        type: "text",
        placeHolder: "Ім'я"}, {
        name: "surname",
        type: "text",
        placeHolder: "Прізвище"}, {
        name: "tel",
        type: "tel",
        placeHolder: "Номер телефону"}, {
        name: "email",
        type: "email",
        placeHolder: "Електронна адреса"}, {
        name: "pass",
        type: "password",
        placeHolder: "Пароль"}]

function Registration({callFormWindow, formSwitch, logIn}) {
    const [flagCheck, setFlagCheck] = useState(false)
    const [formErrors, setFormErrors] = useState({})
    const [userMessage, setUserMessage] = useState('')
    const [form, setForm] = useState({
        name: "",
        surname: "",
        tel: "",
        email: "",
        pass: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFlagCheck(true)

        const errors = {}

        Object.keys(form).forEach((el) => errors[el] = !form[el].length);
        setFormErrors(errors);

        if (form.name.length && form.surname.length && form.tel.length && form.email.length && form.pass.length) {
            const rawResponse = await fetch('/registration', {
                method: "POST",
                body: JSON.stringify(form)
            })
            const response = await rawResponse.json()

            if(!response.answer) {
                setUserMessage(response.message)
            } else {
                callFormWindow()
                logIn()
            }
        }
    }
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        setFlagCheck(false)
    }

    return (
        <div className="registration">
            <div className="fading" onClick={callFormWindow}></div>
            <form className="registration-form" onSubmit={handleSubmit}>
                <div className="log-in-form__top">
                    <span className="log-in-form__title">Реєстрація</span>
                    <div className="log-in-form__close-button" onClick={callFormWindow}>
                        <img className="log-in-form__close-button--svg" src={CloseLogIn} alt="Close log in form"/>
                    </div>
                </div>
                {inputs.map((el, index) => <input className={flagCheck ? (formErrors[inputs[index].name] ? "log-in-form__input log-in-form__input-error" : "log-in-form__input") : "log-in-form__input"} onChange={onChangeInput} type={el.type} name={el.name} placeholder={el.placeHolder}/>)}
                <button className="registration-form__button-registration" type="submit">Зареєструватися</button>
                <button className="registration-form__button-login" onClick={formSwitch}>Вхід</button>
            </form>
            <span className="form-message">{userMessage}</span>
        </div>
    );
}
export default Registration;