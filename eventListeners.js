

const next = () => {
    var h1Element = document.createElement('h1');
    h1Element.textContent = 'Hello, Dynamic H1';
    h1Element.style.color = 'red'
    h1Element.style.margin = '0'
    h1Element.style.border = '2px solid blue'

    // Grand Parent div
    grandParentDiv = document.createElement('div')
    grandParentDiv.style.border = '5px solid black'
    grandParentDiv.style.padding = '10px'
    grandParentDiv.textContent = 'Grand parent div'

    // Parent Div
    parentDiv = document.createElement('div')
    parentDiv.style.border = '2px solid red'
    parentDiv.textContent = "Parent Div"
    parentDiv.style.padding = '10px'


    // Child Div
    childDiv = document.createElement('div')
    childDiv.style.border = '2px solid green'
    childDiv.style.margin = '5px'
    childDiv.style.padding = '10px'


    childDiv.appendChild(h1Element)
    parentDiv.appendChild(childDiv)
    grandParentDiv.appendChild(parentDiv)

    document.body.appendChild(grandParentDiv)

    // Event Listeners
    grandParentDiv.addEventListener('click', () => { alert('Grand parent clicked'), false })
    parentDiv.addEventListener('click', () => { alert('parent clicked'), false })
    childDiv.addEventListener('click', () => { alert("child clicked"), false })
}
document.addEventListener('DOMContentLoaded', next());