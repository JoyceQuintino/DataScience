var instituicoes = []
var alunos = []
var idInst = 1
var idAlu = 1
var matAluno = 2020000

function addObj(ins) {
    if(ins == 'cad_inst'){
        let nameInst = document.getElementById('cad_inst')
        if(nameInst.value == '')
            alert('Campo vazio, preencher, por favor !')
        else{
            let nameInst = document.getElementById('cad_inst')
            instituicoes.push({id: idInst, nome: nameInst.value})
            instituicoes.sort()
            idInst++
            updateInst()
            showInst()
            nameInst.value = ''
        }
    }
    if(ins == 'cad_alu'){
        let nameAlu = document.getElementById('cad_alu')
        if(nameAlu.value == '')
            alert('Campo vazio, preencher, por favor !')
        else {
            let nameInst = document.getElementById('sel_inst').value
            let indexOption = document.getElementById("sel_inst").selectedIndex
            instituicoes.forEach((index, obj) => {
                if(indexOption == index){
                    alunos.push({id: matAluno, nome: nameAlu.value, idInst: obj.id, instituicao: nameInst})
                    idAlu++
                    nameAlu.value = ''
                }
            })
        }
    }
}

function showInst() {
    let list_instituicoes = document.getElementById('select_inst')
    list_instituicoes.innerHTML = ''
    instituicoes.forEach((obj) => {
        let opcao = document.createElement('option')
        opcao.text =obj.nome
        list_instituicoes.add(opcao)
    })
}

function updateInst() {
    const list_instituicoes = document.getElementById('list_inst')
    list_instituicoes.innerHTML = ''
    instituicoes.forEach((obj, index) => {
        list_instituicoes.appendChild(criarItem(obj, index))
    })
}

function criarItem(obj, index) {
    let e = document.createElement('li')
    e.innerHTML = descricao(obj, index)
    return e
}

function descricao(obj, index) {
    return obj.nome + ' : ' + obj.id
}

atualizarHTMLItemInstituicoes = () => {
    updateInst()
    showInst()
}
