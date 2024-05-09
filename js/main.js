// function heandleClick(){
//     if (text.innerText == 'Текст:'){
//         text.innerText = 'Текст: Вы нажали на кнопку'
//     }else if (text.innerText) {
//         text.innerText = ''
//     }else if (text.innerText == ''){
//         text.innerHTML = 1
//     }
    
// }

// var button = document.getElementById('but1')
// button.addEventListener('click', heandleClick)

// var text = document.getElementById('our-text')

function heandleClick(props) {
    console.log('Кнопка: ' + props)
    alert(props)
}

var but, but2, but3, but4, but5, but6 = document.getElementById('header-link', 'header-link2', 'header-link3', 'header-link4', 'header-link5', 'header-link6')


function Afisha() {
    window.location.href = 'aficha.html'
}

function opis() {
    var div = document.querySelector('.img2');
    var label = document.createElement('label');
    label.textContent = 'Opera is a cross\nplatformer browser\n in web industry\n';
    label.classList.add('wider')
    div.insertAdjacentElement('beforeend', label);
}