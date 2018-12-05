var instituicoes = []
var alunos = []
var idInst = 0
var idAlu = 0
var matAluno = 2020000

function addObj(ins){
    if(ins == 'cad_inst'){
        let nameInst = document.getElementById('cad_inst')
        if(nameInst.value == '')
            alert('Campo vazio, preencher, por favor !')
        else{
            instituicoes.push({id: idInst, name: nameInst.value})
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
    let listInst = document.getElementById('sel_inst')
    listInst.innerHTML = ''
    instituicoes.forEach((obj) => {
        let op = document.createElement('option')
        op.text =obj.nome
        listInst.add(op)
    })
}

function updateInst() {
    const listInst = document.getElementById('list_inst')
    listInst.innerHTML = ''
    instituicoes.forEach((obj, index) => {
        listInst.appendChild(createIt(obj, index))
    })
}

function atualizarHTMLItemInstituicoes(){
    updateInst()
    showInst()
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