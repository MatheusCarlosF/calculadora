var res = false

function pegaValor(value){
    if(res && !isNaN(tela.value)){
        tela.value = ""
        res = !res
    }
    tela.value += value  
}

function setOperator(value){
    if(!isNaN(tela.value[tela.value.length-1])){
        tela.value += value  
    }
}

function resultado(){
    if(!isNaN(tela.value[tela.value.length-1])){
        var resultado = eval(tela.value) 
        tela.value = resultado
        res = !res
    }
} 

function del (){
    if(tela.value != "" && !res){
        tela.value = tela.value.substr(0, tela.value.length-1)  
    }
    else if(res){
        tela.value = ""
        res = !res
    }
}

function reset(){
    tela.value = ""
}