const window1 = () => {
    h1 = document.createElement('h1')
    h1.textContent = ("Window in JS")
    h1.style.border = '1px solid orange'

    document.body.appendChild(h1)
    // function changeColorToRed() {
    //     if (document.body.style.background === 'red') {
    //         document.body.style.background = 'white'
    //     } else {
    //         document.body.style.background = 'red'

    //     }
    //     setTimeout(changeColorToRed, 1000)

    // };
    // changeColorToRed()
}
document.addEventListener("DOMContentLoaded", window1())