//funções do quizz

const sequence = [];

let indexSoprano = 0
let indexSopranino = 0
let indexAlto = 0
let indexTenor = 0
let indexBaixo = 0

let verifyFk = 0;

const soprano = ['true', 'false', 'true', 'true']
const sopranino = ['true', 'true', 'true', 'true']
const alto = ['true', 'true', 'false', 'false']
const tenor = ['false', 'true', 'false', 'false']
const baixo = ['false', 'false', 'false', 'false']

function avançar1() {
    let sim = document.getElementById('a_sim')
    let nao = document.getElementById('a_nao')

    if (sim.checked || nao.checked) {
        quiz_a.style.display = 'none'
        quiz_b.style.display = 'flex'
    }

    if (sim.checked) {
        sequence.push('true')
    } else {
        sequence.push('false')
    }
}


function avançar2() {
    let agudo = document.getElementById('b_agudo')
    let grave = document.getElementById('b_grave')

    if (agudo.checked || grave.checked) {
        quiz_b.style.display = 'none'
        quiz_c.style.display = 'flex'
    }

    if (agudo.checked) {
        sequence.push('true')
    } else {
        sequence.push('false')
    }
}


function avançar3() {
    let sozinho = document.getElementById('c_sozinho')
    let grupo = document.getElementById('c_grupo')

    if (sozinho.checked || grupo.checked) {
        quiz_c.style.display = 'none'
        quiz_d.style.display = 'flex'
    }

    if (sozinho.checked) {
        sequence.push('true')
    } else {
        sequence.push('false')
    }
}


function concluir() {
    let melodia = document.getElementById('d_melodia')
    let harmonia = document.getElementById('d_harmonia')

    if (melodia.checked || harmonia.checked) {
        quiz_d.style.display = 'none'
        res.style.display = 'flex'
    }

    if (melodia.checked) {
        sequence.push('true')
    } else {
        sequence.push('false')
    }

    grafico.style.display = 'flex'
    btn_recomeco.style.display = 'block'

    validar()

    fetch("/flute/cadastrarFlautas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            idusuarioServer: sessionStorage.ID_USUARIO,
            fkflautaServer: verifyFk
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            setTimeout(function () {

            }, 1000); // apenas para exibir o loading
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });
}


function validar() {

    for (i = 0; i < sequence.length; i++) {
        const option = sequence[i]

        if (option == soprano[i]) {
            indexSoprano += 1
        }

        if (option == sopranino[i]) {
            indexSopranino += 1
        }

        if (option == alto[i]) {
            indexAlto += 1
        }

        if (option == tenor[i]) {
            indexTenor += 1
        }

        if (option == baixo[i]) {
            indexBaixo += 1
        }
    }

    if (indexSoprano == 4) {
        verifyFk = 1
        let showSoprano = document.getElementById('soprano')
        showSoprano.style.display = 'flex'
    }

    if (indexSopranino == 4) {
        verifyFk = 2
        let showSopranino = document.getElementById('sopranino')
        showSopranino.style.display = 'flex'
    }

    if (indexAlto == 4) {
        verifyFk = 3
        let showAlto = document.getElementById('alto')
        showAlto.style.display = 'flex'
    }

    if (indexTenor == 4) {
        verifyFk = 4
        let showTenor = document.getElementById('tenor')
        showTenor.style.display = 'flex'
    }

    if (indexBaixo == 4) {
        verifyFk = 5
        let showBaixo = document.getElementById('baixo')
        showBaixo.style.display = 'flex'
    }

    if (indexSoprano != 4 && indexSopranino != 4 && indexAlto != 4 && indexTenor != 4 && indexBaixo != 4) {
        let showSoprano = document.getElementById('soprano')
        showSoprano.style.display = 'flex'
    }
}


function recomecar() {
    window.location = "./dashboard.html"
}



