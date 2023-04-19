const userName = localStorage.getItem('userName');

if(userName === null) {
    const name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя')
    localStorage.setItem('userName', name)
    localStorage.setItem('date', new Date().toLocaleString())
} else {
    const date = localStorage.getItem('date')
    alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${date}`)
    localStorage.setItem('date', new Date().toLocaleString())
}
