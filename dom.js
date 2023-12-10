const next1 = () => {
    spanElement = document.createElement('span')
    spanElement.style.border = '1px solid black'

    h1 = document.createElement('h1')
    h1.style.border = '1px solid orange'
    h1.textContent = 'DOM H1...'


    spanElement.appendChild(h1)
    document.body.appendChild(spanElement)
}

document.addEventListener("DOMContentLoaded", next1())