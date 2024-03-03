
// change bg color to random TODO:

/* 

    * when you click on the start button the background color should be changed in every second.
    * when you click on the stop button the background color shouldn't changed.
*/


const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';

    for(let i = 0; i < 6; i++){
        color = color + hex[Math.floor(Math.random() * 16)]
    }

    return color;
}

// console.log(randomColor());


let stopBGColor;

const startBgColor = function(){    
    stopBGColor = setInterval(changeBGColor, 3000)
    function changeBGColor(){
        document.body.style.backgroundColor = randomColor();
    }
}
document.querySelector('#start').addEventListener('click', startBgColor)


// ----------  stop bg color generation
const stopBgColor = function(){
    clearInterval(stopBGColor)
    // stopBGColor = null;
}
document.querySelector('#stop').addEventListener('click', stopBgColor)



