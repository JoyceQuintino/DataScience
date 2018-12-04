var instituicoes = []
var alunos = []
var idInst = 0
var idAlu = 0
var matAluno = 201820000

function addObj(ins){
    if(ins == 'cad_inst'){
        let nameInst = document.getElementById('cad_inst')
        if(nameInst.value == '')
            alert('Campo vazio, preencher, por favor !')
        else{
            instituicoes.push({name: nameInst.value, id: idInst})
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
            instituicoes.forEach((obj, index) => {
                if(indexOption == index){
                    alunos.push({nome: nameAlu.value, instituicao: nameInst, id: matAluno, idInst: obj.id})
                    nameAlu.value = ''
                }
            })
            
        }
    }
}

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
    let e = document.createElement('li')
    e.innerHTML = descricao(obj, index)
    return e
}

function descricao(obj, index) {
    return obj.nome + ' : ' + obj.id + '<button onclick="editar('+ index +')">Editar</button>'
}

atualizarHTMLItemInstituicoes = () => {
    updateInst()
    listar()
}

/*function showInstArea() 
{           
    document.getElementById('instArea').innerHTML = getInst();
}

function getInst(){
    let inst = document.getElementById('instArea')
    var result  = ''

    for (let i = 1; i <= instituicoes.length; i++)
        result = instituicoes[i]['name'] + ' ' + instituicoes[i]['id'] + '\r\n'
    return result
}
*/