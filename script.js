
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function change() {
    let x = Math.floor(Math.random() * 256); 
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let rgb = "rgb(" + x + "," + y + "," + z + ")"; 
    return rgb;
}

// Code 

let container = document.querySelector('.container');

function gridfn() {
    for(i = 0; i < value; i++) {
    grid = document.createElement('div');   
    grid.classList.add('child');
    grid.innerHTML = '&nbsp';
    container.appendChild(grid);
    }
}

function hoverbg() {
    let child = document.querySelectorAll('.child');

    child.forEach(function(hover){

    	hover.addEventListener('mouseover', function(){
    	let bgcolor = change();
    	hover.style.setProperty('background', bgcolor, "important");
			});

			
			hover.addEventListener('touchmove', function(){
    	let bgcolor = change();
    	hover.style.setProperty('background', bgcolor, "important");
			});
	});
}

let value = 256;
let grid = 0;
gridfn();
hoverbg();



let math = 0;
let audio = document.querySelector('.audio');
// Button Code

let btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
removeAllChildNodes(container);
math = Math.floor(Math.random() * 32);
value = math * math;
gridfn();
hoverbg();

container.style.width = Math.floor(Math.sqrt(value)) * 18 + "px";
container.style.height = Math.floor(Math.sqrt(value)) * 18 + "px";
container.style.gridTemplateColumns = "repeat(" + Math.floor(Math.sqrt(value)) + ",minmax(" + 18 + 'px' + "," + 18 + "px))";
container.style.gridTemplateRows = "repeat(" + Math.floor(Math.sqrt(value)) + ",minmax(" + 18 + 'px' + "," + 18 + "px))";

});

// Clean btn
let clean = document.querySelector('.clear');
clean.addEventListener('click', function() {
child = document.querySelectorAll('.child'); 
child.forEach(function(clean){
clean.style.background = 'darkgrey';
});
});













