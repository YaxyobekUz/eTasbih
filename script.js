const elScreen = document.querySelector('#screen');
const elMinus = document.querySelector('#minus');
const elReset = document.querySelector('#reset');
const elCounter = document.querySelector('#counter');

// btn
elCounter.addEventListener('click', function(){
    elScreen.textContent = +elScreen.textContent+1
})
// minus
elMinus.addEventListener('click', function(){
    elScreen.textContent = +elScreen.textContent-1
})

// reset 
elReset.addEventListener('click', function(){
    elScreen.textContent = '0'
})