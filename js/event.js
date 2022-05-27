function makeBlue() {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
}

const pinkButton = document.getElementById('make-pink-button');
pinkButton.onclick = makepink;

function makepink() {
    document.body.style.backgroundColor = 'pink';
    document.body.style.color = 'gray';
}