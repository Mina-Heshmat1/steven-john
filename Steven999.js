let btnOpen = document.getElementById('S1');
let btnClose = document.getElementById('colse');
let container = document.getElementById('word');
btnOpen.onclick = function(){
    container.classList.remove('hide');
    this.classList.add('hide');
    btnClose.classList.remove('hide');
}
btnClose. onclick = function(){
    containt.className+='hide';
    this.className+='hide';
    btnOpen.className.replace('hide','');
}
