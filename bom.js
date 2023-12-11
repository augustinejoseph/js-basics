const bomFunction = () => {
    h1 = document.createElement('h1')
    h1.textContent = ("BOM")
    h1.style.border = '1px solid orange'

    const host = navigator.platform
    const hostSpan = document.createElement('span')
    hostSpan.textContent = "Host OS : " + host

    const locationSpan = document.createElement('span')
    const locaton = location.href
    locationSpan.textContent = 'Location : ' + locaton

    hostSpan.style.display = 'block';
    locationSpan.style.display = 'block';

    document.body.appendChild(h1)
    document.body.appendChild(hostSpan)
    document.body.appendChild(locationSpan)


}
document.addEventListener("DOMContentLoaded", bomFunction())
