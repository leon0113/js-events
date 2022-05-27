// 1
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
}
//1
const pinkButton = document.getElementById('make-pink-button');
pinkButton.onclick = makepink;

function makepink() {
    document.body.style.backgroundColor = 'pink';
    document.body.style.color = 'gray';
}

//  Using Anonymous function
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'lightblue';
}


// Using addEventListner 
const goldenRodButton = document.getElementById('make-goldenRod');
goldenRodButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';

}

// addEventListner in shortcut
const makeSlateBlue = document.getElementById('makeSlateBlue');
makeSlateBlue.addEventListener('click', function () {
    document.body.style.backgroundColor = 'SlateBlue';
    document.body.style.color = 'white';
});


// Using more shortCut
document.getElementById('make-LawnGreen').addEventListener('click', function () {
    document.body.style.backgroundColor = 'LawnGreen';
    document.body.style.color = 'Green';
})