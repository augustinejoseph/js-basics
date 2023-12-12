const next1 = () => {
    spanElement = document.createElement('span')
    spanElement.style.border = '1px solid black'

    h1 = document.createElement('h1')
    h1.style.border = '1px solid orange'
    h1.textContent = 'DOM H1...'


    spanElement.appendChild(h1)
    document.body.appendChild(spanElement)

    // full Html
    const html = document.documentElement
    console.log("html",html);

    // full body
    const body = document.body
    console.log("body",body);

    // Head
    const head = document.head
    console.log("head", head);
}

document.addEventListener("DOMContentLoaded", next1())