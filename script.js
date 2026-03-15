

const element1 = document.getElementById('element1');

function changeClass(clas) {
    element1.className = clas;
}

const body = document.body;
function toggleTheme(btn) {
    //if (body.className == "theme-light") {
    //    body.className = "theme-dark";
    //}
    //else {
    //    body.className = "theme-light";
    //}

    document.body.classList.toggle("theme-light");
    document.body.classList.toggle("theme-dark");

    btn.classList.toggle("active");
}

function highlight(button) {
    if (button.classList.contains('highlight')) {
        alert('Highlight was applied.');
        button.classList.remove('highlight');
    } else {
        alert('Highlight was not applied.');
        button.classList.add('highlight');
    }
}



document.querySelectorAll("#display div").forEach(p => p.style.display = "none");

function info(index) {
    const items = document.querySelectorAll("#display div");
    const buttons = document.querySelectorAll(".tab-btn");
    const info = document.getElementById("info");

    items.forEach(p => p.style.display = "none");

    buttons.forEach(b => b.classList.remove("active"));

    // selected
    items[index].style.display = "block";
    buttons[index].classList.add("active");

    info.textContent = "Selected: " + buttons[index].textContent;

}

