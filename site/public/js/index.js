// carousel
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
// const opt = [];
// let soprano = 0;
// let contralto = 0;
// let baixo = 0;

// const notas = [
//     {
//         'true': [{ 'soprano': 2 }, { 'contralto': 1 }, { 'baixo': 1 }],
//         'false': [{ 'soprano': 1 }, { 'contralto': 2 }, { 'baixo': 2 }]
//     },
//     {
//         'true': [{ 'soprano': 2 }, { 'contralto': 3 }, { 'baixo': 1 }],
//         'false': [{ 'soprano': 1 }, { 'contralto': 1 }, { 'baixo': 4 }]
//     },
//     {
//         'true': [{ 'soprano': 2 }, { 'contralto': 3 }, { 'baixo': 1 }],
//         'false': [{ 'soprano': 1 }, { 'contralto': 1 }, { 'baixo': 4 }]
//     },
//     {
//         'true': [{ 'soprano': 2 }, { 'contralto': 3 }, { 'baixo': 1 }],
//         'false': [{ 'soprano': 1 }, { 'contralto': 1 }, { 'baixo': 4 }]
//     }
// ]

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if (currentSlide === slider.length - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if (currentSlide === 0) {
    currentSlide = slider.length - 1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)


console.log(slider)


currentSlide = currentSlide + 1
currentSlide = currentSlide - 1

//funções do quizz
function logar() {
  window.location = "./login.html"
}



function avançar1() {
  let sim = document.getElementById('a_sim')
  let nao = document.getElementById('a_nao')

  if (sim.checked || nao.checked) {
    quiz_a.style.display = 'none'
    quiz_b.style.display = 'flex'
  }


}

function avançar2() {
  let agudo = document.getElementById('b_agudo')
  let grave = document.getElementById('b_grave')

  if (agudo.checked || grave.checked) {
    quiz_b.style.display = 'none'
    quiz_c.style.display = 'flex'
  }

}

function avançar3() {
  let sozinho = document.getElementById('c_sozinho')
  let grupo = document.getElementById('c_grupo')

  if (sozinho.checked || grupo.checked) {
    quiz_c.style.display = 'none'
    quiz_d.style.display = 'flex'
  }

}

function concluir() {
  let melodia = document.getElementById('d_melodia')
  let harmonia = document.getElementById('d_harmonia')

  if (melodia.checked || harmonia.checked) {
    quiz_d.style.display = 'none'
    res.style.display = 'flex'
  }

}

// opt.push({ questao: 'd', escolha: melodia.checked })

// function concluir() {
//   document.getElementById('resul').innerHTML = ''
//   opt.forEach(opcao => {
//     document.getElementById('resul').innerHTML += `
//       <h5>${opcao.questao}</h5>
//       <p>${opcao.escolha}</p>
//       <br>
//     `
//   })


// }