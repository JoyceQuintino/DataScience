var instituicoes = []
var alunos = []
var idInst = 0
var matAluno = 100

function addInst(){
    let nameInst = document.getElementById('cad_inst')
    if(nameInst.value == '')
        alert('Campo vazio, preencher, por favor !')
    else{
        instituicoes.push({name: nameInst.value, id: idInst})
        idInst++
        document.write('deu certo')
    }
}

