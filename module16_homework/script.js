function makeRequest() {
    const pageNumberInput = document.getElementById("pageNumberInput");
    const limitInput = document.getElementById("limitInput");
    const pageNumber = pageNumberInput.value;
    const limit = limitInput.value;

    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) {
        document.getElementById("resultText").innerText = "Номер страницы вне диапазона от 1 до 10";
        return;
    }
    if (isNaN(limit) || limit < 1 || limit > 10) {
        document.getElementById("resultText").innerText = "Лимит вне диапазона от 1 до 10";
        return;
    }

    const url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}` 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultText = document.getElementById("resultText")
            resultText.innerText = 'Результат поиска'
            const ul = document.createElement('ul')
            data.forEach(item => {
                const li = document.createElement('li')
                const img = document.createElement('img')
                img.width = 500;
                img.src = item.download_url
                ul.appendChild(li)
                li.appendChild(img)
            })
            resultText.appendChild(ul)
                localStorage.setItem("pageNumber", pageNumber);
                localStorage.setItem("limit", limit);
            }) 
            .catch(error => console.error(error));
}

window.onload = function() {
    const pageNumber = localStorage.getItem("pageNumber");
    const limit = localStorage.getItem("limit");
    if (pageNumber && limit) {
        document.getElementById("pageNumberInput").value = pageNumber;
        document.getElementById("limitInput").value = limit;
        makeRequest();
    }
};






