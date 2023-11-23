function styleFormatDisable(){
    let arrayInput      = document.getElementsByTagName("input");
    let arraySpan       = document.getElementsByTagName("span");
    let arraySelect     = document.getElementsByTagName("select");
    let arrayP          = document.getElementsByTagName("p");
    let arrayTextA      = document.getElementsByTagName("textarea");
    //let arrayStrong     = document.getElementsByTagName("strong");
    let arrayTotal  = [arrayInput, arraySpan, arraySelect, arrayP, arrayTextA/*, arrayStrong*/];
    for(i = 0; i < arrayTotal.length; i++){
        let arrayGo = arrayTotal[i];
        for(y = 0; y < arrayGo.length; y++){
            if(arrayGo[y].getAttribute("class") != "fluigicon fluigicon-zoom-in" && arrayGo[y].getAttribute("class") != "input-group-addon"
            && arrayGo[y].getAttribute("class") != "select2-selection__choice__remove" && arrayGo[y].getAttribute("class") != "Obrigatorio"){
                //console.log(arrayGo[y].getAttribute("class"))
                arrayGo[y].style.color = "black";
            }
        }
    }
}
function controllerTime(){ setTimeout(styleFormatDisable, 200); }
window.addEventListener("load", controllerTime);

/***************MUDA AS CORES DOS ELEMENTOS***************/
function colors(){

    const Shead = `border-color: #54A4DD; background-color: #54A4DD ; color: #fff;`
    const Sborder = 'border-color: #54A4DD;'
    const Sback = "background-color: #54A4DD;"
    
    //document.querySelectorAll(".ggg ")[0].style.cssText = "background-color: #54A4DD"

    var S1 = document.querySelectorAll(".fluig-style-guide .panel-info")
    var S2 = document.querySelectorAll(".fluig-style-guide .panel-info>.panel-heading")
    var S3 = document.querySelectorAll(".fluig-style-guide .btn-info ")

    //.fluig-style-guide .panel-info>.panel-heading

    for(var i=0; i<S1.length; i++){
        S1[i].style.cssText = Sborder
    }

    for(var i=0; i<S2.length; i++){
         S2[i].style.cssText = Shead
    }

    
    for(var i=0; i<S3.length; i++){
        S3[i].style.cssText = Sback
    }

    document.querySelectorAll(".fluig-style-guide .panel-info")[5].style.cssText = "display: none"


}
window.addEventListener("load", colors);

function serviço(){
    //document.getElementById('apoio_servico').style.display = 'none';
    //document.getElementById('apoio_evento').style.display = 'none';
    tp = document.getElementById('tp_apoio').value
    secFunc(tp)
    document.getElementById('tp_apoio').addEventListener('change', function ()  { 
        var tipo1 = this.value
        secFunc(tipo1)
    });

    // document.getElementById("Portal").addEventListener('click', function(){
    //     if(document.getElementById("Portal").checked){
    //         document.getElementById("Portal").value = "sim"
    //     }
    //     else{
    //         document.getElementById("Portal").value = "não"
    //     }
    // })
    
}
window.addEventListener('load', serviço)

function secFunc(tipo){
    var visualizacao = window.parentOBJ.ECM.workflowView.stateDescription

    if(visualizacao == 'Detalhes da Solicitação'){
        var tp = document.getElementById('tp_apoio');
        if(tp.innerHTML=='Apoio em Serviço'){
            document.getElementById('apoio_servico').style.display = 'block'
            document.getElementById('apoio_evento').style.display = 'none'
        }else{
            document.getElementById('apoio_evento').style.display = 'block'
            document.getElementById('apoio_servico').style.display = 'none';
        }
    }

    if(tipo == 'evento'){
        document.getElementById('apoio_evento').style.display = 'block'
        document.getElementById('apoio_servico').style.display = 'none';
    }
    else if(tipo == 'servico'){
        document.getElementById('apoio_servico').style.display = 'block'
        document.getElementById('apoio_evento').style.display = 'none'
    }
    else if(tipo == '0'){
        document.getElementById('apoio_servico').style.display = 'none';
        document.getElementById('apoio_evento').style.display = 'none';
    }
}

function blockCamp(){
    var Now_State = window.parent.ECM.workflowView.sequence    
    var visualizacao = window.parentOBJ.ECM.workflowView.stateDescription
    console.log("estado: "+Now)
    console.log("etapa: "+visualizacao)

    var botoes = document.getElementsByClassName("btn-info")
    var eu = document.getElementsByClassName("fluigicon-trash")

    if(visualizacao == 'Detalhes da Solicitação'){
        console.log("entrou visualização")
        for(var i=0; i<botoes.length; i++){
            botoes[i].style.display = "none"
        }
        for(var i=0; i<eu.length; i++){
            eu[i].style.display = "none"
        }
        document.getElementById("briefing").style.display = "none"
    }
    
    if(Now_State == 5 || Now_State == 10 ||  Now_State == 24 ||Now_State == 38 ||  Now_State == 43 || Now_State == 78 || Now_State == 85){
        console.log("entrou Now")
        for(var i=0; i<botoes.length; i++){
            botoes[i].style.display = "none"
        }
        for(var i=0; i<eu.length; i++){
            eu[i].style.display = "none"
        }
        document.getElementById("briefing").style.display = "none"
    }
    // else{
    //     console.log("entrou else")
    //     for(var i=0; i<botoes.length; i++){
    //         botoes[i].style.display = "block"
    //     }
    //     for(var i=0; i<eu.length; i++){
    //         eu[i].style.display = "block"
    //     }
    //     document.getElementById("briefing").style.display = "block"
    // }
}
window.addEventListener('load', blockCamp)
