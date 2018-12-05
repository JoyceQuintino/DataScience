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
                    alunos.push({id: idAlu, nome: nameAlu.value, idInst: obj.id, nameInst: nameInst})
                    alunos.sort()
                    idAlu++
                    updateAlu()
                    showAlu()
                    nameAlu.value = ''
                }
            })
        }
    }
}

//funções da instituição

function showInst() {
    let list_instituicoes = document.getElementById('sel_inst')
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
        list_instituicoes.appendChild(createIt(obj, index))
    })
}

function createIt(obj, index) {
    let ele = document.createElement('li')
    ele.innerHTML = descricao(obj, index)
    return ele
}

function descricao(obj, index) {
    return obj.nome + ' : ' + obj.id
}

atualizarHTMLInstituicoes = () => {
    updateInst()
    showInst()
}

//funções do aluno

function showAlu() {
    let list_alu = document.getElementById('cad_alu')
    list_alu.innerHTML = ''
    alunos.forEach((obj) => {
        let op = document.createElement('option')
        op.text =obj.nome
        list_alu.add(op)
    })
}

function updateAlu() {
    const list_alu = document.getElementById('list_alu')
    list_alu.innerHTML = ''
    alunos.forEach((index, obj) => {
        list_alu.appendChild(createItAlu(index, obj))
    })
}

function createItAlu(index, obj) {
    let ele = document.createElement('li')
    ele.innerHTML = descricaoAlu(index, obj)
    return ele
}

function descricaoAlu(obj, index){
    return obj.nome + ' : ' + obj.instituicao
}

atualizarHTMLAlunos = () => {
    updateAlu()
}

