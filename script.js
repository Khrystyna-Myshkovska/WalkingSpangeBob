function getID(id){
    return document.getElementById(id);
}
getID ('up').onclick = function(){
    let goUp = getID('bob').offsetTop;
    if (goUp > 0) {
        bob.style.top = goUp - 10 + 'px';
        bob.style.transform = 'rotate(180deg)'
    }
}
getID ('left').onclick = function(){
    let goLeft = getID ('bob').offsetLeft;
    if (goLeft > 0) {
        bob.style.left = goLeft - 10 + 'px';
        bob.style.transform = 'rotate(90deg)'
    }
}
getID ('right').onclick = function(){
    let goRight = getID ('bob').offsetLeft;
    if(goRight<window.innerWidth-140){
        bob.style.left = goRight + 10 + 'px';
        bob.style.transform = 'rotate(-90deg)'
    }
}
getID ('down').onclick = function(){
    let goDown = getID ('bob').offsetTop;
    if(goDown<window.innerHeight-140){
        bob.style.top = goDown + 10 + 'px';
        bob.style.transform = 'rotate(0deg)'
    }
}