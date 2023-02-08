let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90; // 360 graus divididos por 60 multiplicado pelo valor da variável segundos. - 90 para corrigir o atraso em segundos ocasionado pela posição no CSS
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`

}

function fixZero(time) { // corrigir os números para ter no minimo 2 caracteres
    if(time<10) {
        return '0'+time;
    } else {
        return time;
    }
}

setInterval(updateClock, 1000); // roda a updateclock a cada segundo
updateClock(); // para ter o efeito imediato assim que carregar a tela