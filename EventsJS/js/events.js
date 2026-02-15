console.log('External js');

// option 2 for event handeling 
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';

}
function makeRed() {
    document.body.style.backgroundColor = 'red';

}


// 2nd method get element by id and thn set on click
const btnMakeBlue = document.getElementById('btn-blue');
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';

}

// method 3 

const btnMakePurple = document.getElementById('btn-purple');
// console.log(makePurple);
btnMakePurple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


// method 4 : addEventListener use kore 

// document.getElementById().addEventListener('event type', handler)
document.getElementById('btn-make-green')
    .addEventListener('click', function makeGreen() {
        document.body.style.backgroundColor = 'green';
    })

document.getElementById('btn-make-goldenrod')
    .addEventListener('click', function () {
        document.body.style.backgroundColor = 'goldenrod';
    })
