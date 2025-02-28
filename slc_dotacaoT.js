function codProjetoT() {
    var dataset = DatasetFactory.getDataset("dsprojeto", null, null, null);
    return dataset.values
}

function codAcaoUnidadeT() {
    var dataset = DatasetFactory.getDataset("dsc_CentroCusto", null, null, null);
    return dataset.values
}

  
function optAcaoT(linha) {
    var vdatalistA = document.getElementById("browsersA")
    while (vdatalistA.hasChildNodes()) {
        vdatalistA.removeChild(vdatalistA.firstChild);
    }
    
    var vdatalistU = document.getElementById("browsersU")
    while (vdatalistU.hasChildNodes()) {
        vdatalistU.removeChild(vdatalistU.firstChild);
    }
    
    var GetUni = []

    var arrayOption = codAcaoUnidadeT()
    console.log(arrayOption)
    var projT = document.getElementById("txt_codprojetoT___" + linha).value
    
    for (i = 0; i < arrayOption.length; i++) {
        var codprojT = arrayOption[i].CODIGO
        if (codprojT.length > 5 && codprojT.split(".")[2] == null) {
            if (codprojT.split('.')[0] == projT) {
                var voption = document.createElement('option')
                att = document.createAttribute('value')
                att.value = arrayOption[i].NOME
                voption.setAttributeNode(att)
                voption.innerText = arrayOption[i].CODIGO
                vdatalistA.appendChild(voption)
            }
        } else if (codprojT.length > 5) {
            if (codprojT.split('.')[0] == projT) {
                GetUni.push(arrayOption[i].NOME)
                //console.log(codproj)
            }
        }
    }
    //console.log(GetUni)

    var ArrayUni = GetUni.filter(function (el, i) {
        return GetUni.indexOf(el) === i;
    });
    //console.log(ArrayUni)
    for (j = 0; j < ArrayUni.length; j++) {
        var voptionU = document.createElement('option')
        att = document.createAttribute('value')
        att.value = ArrayUni[j]
        voptionU.setAttributeNode(att)
        //voptionU.innerText =  ArrayUni[i]
        vdatalistU.appendChild(voptionU)
    }

}

 function getRowDotT() {
    var table = document.getElementById('asd')
    var tbody = table.tBodies[0]
    var rows = tbody.rows
    var slc = rows[rows.length - 1].getElementsByTagName('input')
    // console.log(slc)
    if (slc[slc.length - 1].id.indexOf('___') != -1) {
        // console.log("linha: " + slc[slc.length - 1].id.split('___')[1])
        return slc[slc.length - 1].id.split('___')[1]
    }
} 

function verificaDotacaoT() {
    var linha = getRowDotT()
    
    for (var i = 1; i <= linha; i++) {
        // console.log("entrou for verificação ... linha: " + i)
       slcProjetoT(i)
        // console.log("projete" + i)
       slcAcaoT(i)
        // console.log("acao" + i)
        slcUnidadeT(i)
        // console.log("unidade" + i)
        
        //console.log("etapa for if: "+ Now)
        
        //if(Now==0 || Now==4 || Now == 47 || Now==36 || visualizacao == "Detalhes da Solicitação"){
            if (document.getElementById("txt_codrecursoT___" + i).value != "") {
                var codigoT = (document.getElementById("txt_codrecursoT___" + i).value).split(".")
                // console.log("{ projeto: " + codigo[0] + "\nacao: " + codigo[1] + "\nunidade:" + codigo[2] + " }")
                var Array = codAcaoUnidadeT()
                
                for (j = 0; j < Array.length; j++) {
                    var acaoT = codigoT[0] + '.' + codigoT[1]
                //console.log("ACAO for: "+acao)
                
                if (codigoT[0] == Array[j].CODIGO && (Array[j].CODIGO).split('.')[1] == null) {
                    document.getElementById("slc_projetoT_" + i).value = Array[j].NOME
                }
                else if (acaoT == Array[j].CODIGO && (Array[j].CODIGO).split('.')[2] == null) {
                    document.getElementById("slc_acaoT_" + i).value = Array[j].NOME
                }
                else if (codigoT[2] == (Array[j].CODIGO).split('.')[2]) {
                    document.getElementById("slc_unidadeT_" + i).value = Array[j].NOME
                }
            }
        }
        
        var pro = document.getElementById("txt_codprojetoT___" + i).value
        var ac = (document.getElementById("txt_codacaoT___" + i).value).split('.')[1]
        
       /*  if (document.getElementById("txt_saldo___" + i).value == '') {
            document.getElementById("txt_saldo___" + i).value = '0,00'

        }
        else {
            document.getElementById("txt_saldo___" + i).value = document.getElementById("txt_saldo___" + i).value
        } */
        
        optAcaoT(linha)

    }
    
    
}
window.addEventListener("load", verificaDotacaoT)


function slcProjetoT(linha) {
    //var linha = getRowDotT()
    //var divaAll = document.getElementById('projetoT___'+linha)
    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parent.ECM.workflowView.stateDescription
    
    // console.log(document.getElementsByClassName("projetov")[linha])
    
    if (document.getElementsByClassName("projetoT")[linha] == undefined) {
        // console.log("undefined")
        var posicao = document.getElementsByClassName("projetoT").length - 1
    }
    else {
        // console.log("not undefined")
        var posicao = linha
    }
    
    var divaAll = document.getElementsByClassName("projetoT")[posicao]
    
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'slc_projetoT'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Projeto'
    
    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)
    
    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'
    
    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)
    
    divaAll.appendChild(vlabel)
    
    // select
    
    
    var vselect = document.createElement('input')
    var tamanho = document.getElementsByClassName("projetoT").length
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'slc_projetoT'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'slc_projetoT_' + linha
    vselect.setAttributeNode(att)
    att = document.createAttribute('placeholder')
    att.value = 'Escolha o Projeto'
    vselect.setAttributeNode(att)
    att = document.createAttribute('autocomplete')
    att.value = 'off'
    vselect.setAttributeNode(att)
    
    
    
    if (visualizacao == "Detalhes da Solicitação") {
        att = document.createAttribute('readonly')
        vselect.setAttributeNode(att)
    }
    else if (Now == 5 || Now == 8 || Now == 32 || Now == 43 || Now == 63){
        att = document.createAttribute('readonly')
        vselect.setAttributeNode(att)
    }
    
    var vdatalist = document.createElement('datalist')
    att = document.createAttribute('id')
    att.value = 'browsersP'
    vdatalist.setAttributeNode(att)
    

    var arrayOption = codProjetoT()
    for (i = 0; i < arrayOption.length; i++) {
        var voption = document.createElement('option')
        att = document.createAttribute('value')
        att.value = arrayOption[i].NOME
        voption.setAttributeNode(att)
        voption.innerText = arrayOption[i].CODCCUSTO
        vdatalist.appendChild(voption)
    }
    
    divaAll.appendChild(vselect)

    var tamanhoP = document.getElementsByClassName("projetoT").length
    if(tamanhoP <= 2){ 
    	 att = document.createAttribute('list')
    	    att.value = 'browsersP'
    	    vselect.setAttributeNode(att) //comentar as 3
    	    divaAll.appendChild(vdatalist) //comentar
    }	
   
   
    
    document.getElementById("slc_projetoT_" + linha).addEventListener("change", function () {
       
        document.getElementById('slc_acaoT_' + linha).value = ''
        document.getElementById('slc_unidadeT_' + linha).value = ''
        var projT = document.getElementById("slc_projetoT_" + linha).value
       
        for (i = 0; i <
            arrayOption.length; i++) {
                if (arrayOption[i].NOME == projT) {
                    //console.log("é")
                    document.getElementById("txt_codprojetoT___" + linha).value = arrayOption[i].CODCCUSTO
                    break;
                }
            }
            optAcaoT(linha)
        })
        
    }
   // window.addEventListener("load",slcProjetoT)
    
    
    function slcAcaoT(linha) {
        
        var Now = window.parent.ECM.workflowView.sequence
        var visualizacao = window.parent.ECM.workflowView.stateDescription
        
        // console.log(document.getElementsByClassName("projetov")[linha])
        
        if (document.getElementsByClassName("projetoT")[linha] == undefined) {
            // console.log("undefined")
            var posicao = document.getElementsByClassName("projetoT").length - 1
        }
        else {
            // console.log("not undefined")
            var posicao = linha
        }
        
    var divaAll = document.getElementsByClassName("acaoT")[posicao]

    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'slc_acaoT'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Ação'
    
    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)
    
    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'

    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)
    
    divaAll.appendChild(vlabel)
    
 
    var vselect = document.createElement('input')
    att = document.createAttribute('list')
    att.value = 'browsersA'
    vselect.setAttributeNode(att)
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'slc_acaoT'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'slc_acaoT_' + linha
    vselect.setAttributeNode(att)
    att = document.createAttribute('placeholder')
    att.value = 'Escolha a Ação'
    vselect.setAttributeNode(att)
    att = document.createAttribute('autocomplete')
    att.value = 'off'
    vselect.setAttributeNode(att)
    
    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parent.ECM.workflowView.stateDescription
    
    if (visualizacao == "Detalhes da Solicitação") {
        att = document.createAttribute('readonly')
        vselect.setAttributeNode(att)
    }
    else if (Now == 5 || Now == 8 || Now == 32 || Now == 43 || Now == 63){
        att = document.createAttribute('readonly')
        vselect.setAttributeNode(att)
    }
    
    var vdatalist = document.createElement('datalist')
    att = document.createAttribute('id')
    att.value = 'browsersA'
    vdatalist.setAttributeNode(att)
    
    divaAll.appendChild(vselect)
    divaAll.appendChild(vdatalist)
    
    document.getElementById("slc_acaoT_" + linha).addEventListener('change', function () {
        var arrayOption = codAcaoUnidadeT()
        var codAcaoT = document.getElementById("slc_acaoT_" + linha).value
        var codProT = document.getElementById("txt_codprojetoT___" + linha).value
        // console.log(codAcao)
        for (i = 0; i < arrayOption.length; i++) {
            var ProjT = arrayOption[i].CODIGO.split(".")[0]
            // console.log("codigo do projeto ACAO: " + Proj)
            if (arrayOption[i].NOME == codAcaoT && ProjT == codProT) {
                //console.log("é")
                document.getElementById("txt_codacaoT___" + linha).value = arrayOption[i].CODIGO
                break;
            }
        }
        
        document.getElementById("slc_unidadeT_" + linha).value = ''
        
        var pro = document.getElementById("txt_codprojetoT___" + linha).value
        var ac = (document.getElementById("txt_codacaoT___" + linha).value).split('.')[1]
        
        buscaSaldo(pro, ac, linha)
        
    }) 
}

//window.addEventListener("load",slcAcaoT)

function slcUnidadeT(linha) {
    
    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parent.ECM.workflowView.stateDescription
    
    console.log(document.getElementsByClassName("projetoT")[linha])
    
    if (document.getElementsByClassName("projetoT")[linha] == undefined) {
        console.log("undefined")
        var posicao = document.getElementsByClassName("projetoT").length - 1
    }
    else {
        console.log("not undef;ined")
        var posicao = linha
    }
    
    var divaAll = document.getElementsByClassName("unidadeT")[posicao]
    
   
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'slc_unidadeT'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Unidade'
    
    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)
    
    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'

    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)
    
    divaAll.appendChild(vlabel)
    

    var vselect = document.createElement('input')

    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'slc_unidadeT'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'slc_unidadeT_' + linha
    vselect.setAttributeNode(att)
    att = document.createAttribute('placeholder')
    att.value = 'Escolha a Unidade'
    vselect.setAttributeNode(att)
    att = document.createAttribute('autocomplete')
    att.value = 'off'
    vselect.setAttributeNode(att)
    
    
    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parent.ECM.workflowView.stateDescription
    
    if (visualizacao == "Detalhes da Solicitação") {
        att = document.createAttribute('readonly')
        vselect.setAttributeNode(att)
    }
    else if (Now == 5 || Now == 8 || Now == 32 || Now == 43 || Now == 63){
        att = document.createAttribute('readonly')
        vselect.setAttributeNode(att)
    }
    
    var vdatalist = document.createElement('datalist')
    att = document.createAttribute('id')
    att.value = 'browsersU'
    vdatalist.setAttributeNode(att)

    divaAll.appendChild(vselect)
    

    att = document.createAttribute('list')
    att.value = 'browsersU'
    vselect.setAttributeNode(att) //comentar as 3
    divaAll.appendChild(vdatalist)
    
    
    
    document.getElementById("slc_unidadeT_" + linha).addEventListener('change', function () {
        var arrayOption = codAcaoUnidadeT()
        var codUniT = document.getElementById("slc_unidadeT_" + linha).value
        var codProT = document.getElementById("txt_codprojetoT___" + linha).value
        // console.log(codUni)
        for (i = 0; i < arrayOption.length; i++) {
            var ProjT = arrayOption[i].CODIGO.split(".")[0]
            // console.log("codigo do projeto ACAO: " + Proj)
            if (arrayOption[i].NOME == codUniT && ProjT == codProT) {
                //console.log("é")
                document.getElementById("txt_codrecursoT___" + linha).value = document.getElementById("txt_codacaoT___" + linha).value + "." + (arrayOption[i].CODIGO).split(".")[2]
                // document.getElementById("arrUnidade").value += document.getElementById("txt_codrecursoT___" + linha).value + "_"
                break;
            }
        }
    })
}

//window.addEventListener("load", slcUnidadeT)