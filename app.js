//geerate random color

function gencol(){
let hexcode = "0123456789ABCDEF"
let color = "#"

for(let i=0; i < 6 ; i++){
color += hexcode[Math.floor(Math.random()*16)]
}
return color
}

function rancol(){
    document.querySelector(".colcode").innerHTML=gencol()
    document.querySelector('.container').style.backgroundColor = gencol();
}


