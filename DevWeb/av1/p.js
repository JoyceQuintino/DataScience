var instituicoes = []
var alunos = []
var idInst = 0
var matAluno = 100

function addObj(ins){
    if(ins == 'cad_inst'){
        let nameInst = document.getElementById('cad_inst')
        if(nameInst.value == '')
            alert('Campo vazio, preencher, por favor !')
        else{
            instituicoes.push({name: nameInst.value, id: idInst})
            idInst++
            document.write('deu certo')
        }   
    }
    if(ins == 'cad_alu'){
        let nameAlu = document.getElementById('cad_inst')
    if(nameAlu.value == ''){
        alert('Campo vazio, preencher, por favor !')
    } else {
        if(instituicoes.length == 0){
            alert('Cadastre uma instituição')
        } else {
            let nameInst = document.getElementById('sel_inst').value
            let indexOpt = document.getElementById("sel_inst").selectedIndex
            instituicoes.forEach((obj, index) => {
                if(indexOption == index){
                    alunos.push({name: nameAlu.value, instituicao: nomeInstituicao, id: matAluno, idInst: obj.id})
                }
            })
        }
    }
}

function showInst(){
    let showInst = document.getElementById('sel_inst')
    showInst.innerHTML = ''
    instituicoes.forEach((obj) => {
        let option = document.createElement('option')
        option.text = obj.name
        showInst.add(option)
    })
}

