const getElementFn = () => {
    // get elements by id
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById('lastName')
    const submitButton = document.getElementById('submitButton')
    const resultsDiv = document.getElementById('getElementResultsDiv')

    // get elements by classname
    const resetButton = document.getElementsByClassName('resetButton')

    // get Element by tagname
    const formInputs = document.getElementsByTagName('input')

    // Add event listener to show form input
    submitButton.addEventListener('click', function () {
        resultsDiv.innerHTML =
            `
        <p>First Name : ${firstNameInput.value}</p>
        <p>Last Name : ${lastNameInput.value}</p>

        `
    })

};
document.addEventListener("DOMContentLoaded", getElementFn);
