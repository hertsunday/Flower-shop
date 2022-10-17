export const writeFile = (fileName, data) => {
    return new Promise((res, rej) => {
        const randomValue = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        if(randomValue >= 9) {
            rej(new Error("Не вдається записати інформацію в базу даних"));
        }
        const db = JSON.parse(localStorage.getItem('database'));
        const newValue = {...db, [fileName]: data};
        localStorage.setItem('database', JSON.stringify(newValue));
        res(newValue);
    })
}

export const readFile = (fileName) => {
    return new Promise((res, rej) => {
        const randomValue = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        if(randomValue >= 9) {
            rej(new Error("Немає доступу до бази даних"));
        }
        if(localStorage.getItem('database')){
            res(JSON.parse(localStorage.getItem('database'))[fileName]);
        }
        res();
    })
}