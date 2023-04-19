function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const p = new Promise((res, rej) => {
    const num = getRandomInt(1, 100)
    if(num % 2 === 0) {
        res(num)
    } else {
        rej('ошибка')
    }
})
    p.then(result => {
        setTimeout(() => {
            console.log(result)
        }, 3000);
    })
    .catch(e => console.error(e))