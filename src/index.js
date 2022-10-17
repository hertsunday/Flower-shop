import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {writeFile, readFile} from "./components/header/fileProcess";

(async () => {
    const msw = await import('msw');

    const handlers = [
        msw.rest.get('/login', async (req, res, ctx) => {
            const users = await readFile("userList") || [];

            let log = users.some(el => el.email === req.url.searchParams.get("email") && el.pass === req.url.searchParams.get("pass"))
            let wrongPass = users.some(el => el.email === req.url.searchParams.get("email") && el.pass !== req.url.searchParams.get("pass"))

            if (log){
                return res(
                    ctx.json({
                        message: "Ви увійшли",
                        answer: 1
                    }),
                    ctx.delay(1000)
                )
            } else {
                if(wrongPass) {
                    return res(
                        ctx.json({
                            message: "Невірний пароль",
                            answer: 0
                        }),
                        ctx.delay(1000)
                    )
                } else {
                    return res(
                        ctx.json({
                            message: "Електронну адресу не знайдено\nВам треба зареєструватися",
                            answer: 0
                        }),
                        ctx.delay(1000)
                    )
                }
            }
        }),

        msw.rest.post('/registration', async (req, res, ctx) => {
            const users = await readFile("userList") || [];
            const userExists = users.some(el => el.email === JSON.parse(req.body).email)

            if(userExists){
                return res(
                    ctx.json({
                        message: "Ця електронна адреса вже зареєстрована",
                        answer: 0
                    })
                )
            }

            users.push(JSON.parse(req.body))
            await writeFile("userList",users);
            return res(
                ctx.json({
                    message: "Ви успішно зареєструвалися",
                    answer: 1
                })
            )
        }),
    ];
    console.log(msw);
    const worker = msw.setupWorker(...handlers);

    await worker.start();

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
})()

reportWebVitals();