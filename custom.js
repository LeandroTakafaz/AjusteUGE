function adiciona() {
    wdkAddChild("asd");
    var linha = getRowDotT()
    slcProjetoT(linha)
    slcAcaoT(linha)
    slcUnidadeT(linha)
    copiarValores()
    }

function fnCustomDelete(elem) {
    fnWdkRemoveChild(elem);
    somarValores()
}

function k(i) {
    var v = i.value.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    i.value = ' R$ ' + v; 
}

function buscaSaldo(projeto, acao, indx) {

    console.log("projeto VALUE: " + projeto.value);
    console.log("acao VALUE: " + acao.value);

    //var campo = acao;

    //if (campo.value != "") {
    if (acao != "") {
        ///var id = projeto.name.replace("txt_codprojeto___", "");
        console.log("cc id " + indx);
        //var cc1 = new Array(projeto.value + "." + acao.value);
        var cc1 = new Array(projeto + "." + acao);
        console.log("cc1: " + cc1)
        datasetsaldo = DatasetFactory.getDataset("dssaldo", cc1, null, null);
        //datasetsaldo = valuesDataset(cc1)

        console.log("DATASET SALDO LENGHT " + datasetsaldo.values.length);
        console.log("datasetsaldo: " + datasetsaldo);
        console.log("datasetsaldo.values: " + datasetsaldo.values);
        if (datasetsaldo.values.length > 0) {
            var record = datasetsaldo.values[0];
            //var record = datasetsaldo[0];
            saldo = eval("record[\"SALDO\"]");
            saldo = moeda.formatar(saldo)
            document.getElementById("txt_saldo___" + indx).value = saldo
            
        }
        else {
            saldo = 0
        }

        if (saldo == 0 || saldo == "0,00") {
            //console.log(document.getElementById("txt_saldo___1"))
            document.getElementById("txt_saldo___" + indx).value = saldo;
            document.getElementById("txt_saldo___" + indx).style = "background-color:#ea8989; color: black";
        }
        else if (saldo != 0 || saldo != "0,00") {
            //console.log(document.getElementById("txt_saldo___1"))
            document.getElementById("txt_saldo___" + indx).value = saldo;
            document.getElementById("txt_saldo___" + indx).style = "background-color:#86dc9c ; color: black";
        }

    }
}

let siglaDiretoria  = document.getElementById('hdn_dir_vinc').value.split(':')[2]

function datasetUnidade(){  dsc_Unidades = DatasetFactory.getDataset("dsc_Unidades",null,null,null); }
window.addEventListener("load", datasetUnidade);
function unidade(){
    var ds_mat = DatasetFactory.getDataset("colleague",null,null,null);
    var ds_und = dsc_Unidades
    var matDir = 0
    var mat = document.getElementById("cmb_NomeSolicitante").value;

    for(var i=0;i<ds_mat.values.length;i++){
        if(mat == ds_mat.values[i]['colleaguePK.colleagueId']){
            var und = ds_mat.values[i]['groupId'];
            for(var j=0;j<ds_und.values.length;j++){
                if(und == ds_und.values[j]['AntigaSigla']){
                    document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeGerente']
                    document.getElementById("zm_UnidadeSolicitante").value = ds_und.values[j]['NomeUnidade']
                    if(und != 'DITEC' && und != 'DIRAF' && und != 'DISUP'){
                        document.getElementById("hdn_numSuperior").value = ds_und.values[j]['Matricula'];
                    }else{
                        document.getElementById("hdn_numSuperior").value = mat;
                    }
                    document.getElementById("MatDiretoria").value = ds_und.values[j]['NomeSuperior']
                    matDir = ds_und.values[j]['MatSuperior']
                }
            }
        }
    }
    for(j = 0; j < ds_und.values.length; j++){
        //console.log(matDir)
        if(ds_und.values[j]['Matricula'] == matDir){
            document.getElementById("MatDiretoria_Unid").value = ds_und.values[j]['NomeUnidade'];
            document.getElementById("hdn_dir_vinc").value = 'Pool:Role:'+ds_und.values[j]['Sigla']+'';
        }
    }
}
window.addEventListener("load", unidade);

function setSelectedZoomItem(selectedItem) {

    var indice = -1;
    var arraySelectedItem = selectedItem.inputId.split("___");

    if (arraySelectedItem != null && arraySelectedItem != undefined && arraySelectedItem.length > 1) {
        indice = arraySelectedItem[1];
    }

    if (selectedItem["inputId"] == "txt_projeto___" + indice) {

        document.getElementById("txt_codprojeto___" + indice).value = selectedItem["CODCCUSTO"];

        reloadZoomFilterValues("txt_acao___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_acao___" + indice).value);

    }
    if (selectedItem["inputId"] == "txt_acao___" + indice) {

        document.getElementById("txt_codacao___" + indice).value = selectedItem["CODACAO"];

        reloadZoomFilterValues("txt_recursos___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_codacao___" + indice).value);

        buscaSaldo(document.getElementById("txt_codprojeto___" + indice), document.getElementById("txt_codacao___" + indice))

        var saldo = document.getElementById("txt_saldo___" + indice).value

        // console.log(saldo)
        saldo = formataCasasDecimais(saldo)
        // console.log(saldo)
        saldo = moeda.formatar(saldo)
        document.getElementById("txt_saldo___" + indice).value = saldo

    }
}

function formatarMoeda(elem) {
    var id = elem.id
    var valor = moeda.desformatar(elem.value)
    var valorDif = moeda.formatar(valor)
    document.getElementById(id).value = valorDif
}

var moeda = {
    desformatar: function (num) {
        num = num.replace(/\./g, "");
        num = num.replace(/\,/g, ".");
        return parseFloat(num);
    },
    formatar: function (num) {
        x = 0;
        if (num < 0) {
            num = Math.abs(num);
            x = 1;
        }
        if (isNaN(num)) num = "0";
        cents = Math.floor((num * 100 + 0.5) % 100);
        num = Math.floor((num * 100 + 0.5) / 100).toString();
        if (cents < 10) cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
        ret = num + ',' + cents;
        if (x == 1) ret = ' – ' + ret;
        return ret;
    },
    arredondar: function (num) {
        return Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2);
    }
}

function BloquearCampos() {

    var ServicoSelect = document.getElementById("TipoServico");
    var MetricasSelect = document.getElementById("MetricasLabel");
    var ObjetivoSelect = document.getElementById("ObjetivoLabel");
    var PainelSelect = document.getElementById("painel_integra");
    var PainelAjuste = document.getElementById("painel_ajuste");

    
    if (ServicoSelect.value === "1") {
        ObjetivoSelect.disabled = false; // Habilita o campo Objetivo
        MetricasSelect.disabled = true; // Desabilita o campo Metricas
        ObjetivoSelect.style.display = "block"; //Mostra o Campo Objetivo
        MetricasSelect.style.display = "none"; //Esconde o Campo Metricas
        PainelSelect.style.display = "none";
        PainelAjuste.style.display = "block";

    } else if (ServicoSelect.value === "2") {
        ObjetivoSelect.disabled = true;
        MetricasSelect.disabled = false;
        ObjetivoSelect.style.display = "none";
        MetricasSelect.style.display = "block";
        PainelSelect.style.display = "block";
        PainelAjuste.style.display = "none";

    }  else if (ServicoSelect.value === ""){
        ObjetivoSelect.disabled = true; // Desabilita o campo Objetivo
        MetricasSelect.disabled = true; // Desabilita o campo Metricas
        ObjetivoSelect.style.display = "none";
        MetricasSelect.style.display = "none";
        PainelSelect.style.display = "none";
        PainelAjuste.style.display = "none";
    }
}

var ServicoSelect = document.getElementById("TipoServico");
ServicoSelect.addEventListener("change", BloquearCampos);
BloquearCampos();


function SumirValores() {
    var selectObjetivo = document.getElementById("Objetivo");
    var sumirValores = document.getElementsByClassName("Valor");

    selectObjetivo.addEventListener("change", function () {
        var escolha = selectObjetivo.value;

        for (i = 0; i < sumirValores.length; i++) {
            if (escolha === "Dimin") {
                sumirValores[i].style.display = "none";
            } else if (escolha === "Acresc") {
                sumirValores[i].style.display = "block";
            }
        }
    });
}
window.addEventListener("load", SumirValores);

function ExcluirEvento() {
    var MetricasSelectZ = document.getElementById("Metricas");
    var CodigoSelect = document.getElementById("codLabel");
    
    if (MetricasSelectZ.value === "Evento"){
        CodigoSelect.style.display = "block"

    } else if (MetricasSelectZ.value === ""){
        CodigoSelect.style.display = "none"

    } else{
        CodigoSelect.style.display = "none"
    
    }
}

var MetricasSelectZ = document.getElementById("Metricas");
MetricasSelectZ.addEventListener("change", ExcluirEvento);
ExcluirEvento();

function setSelectedZoomItem(selectedItem) 
{
	
	//ok
	if(selectedItem.inputId == "txt_projetoS")
	{
		$('#codProjetoS').val(selectedItem.CODCCUSTO);
		atualizaZoomFilterAcao(selectedItem.CODCCUSTO);
		styleFormatDisable()
	}

	//ok
	if(selectedItem.inputId == "txt_acaoS")
	{
		$('#codAcaoS').val(selectedItem.CODACAO);
		var codProjetoS = $('#codProjetoS').val();
		atualizaZoomFilterRecursos(codProjetoS, selectedItem.CODACAO);styleFormatDisable();
	}
	
}

function removedZoomItem(removedItem) 
{
	if(removedItem.inputId.startsWith('txt_projetoS'))
	{
		$("#txt_acaoS").val();
		$("#txt_recursosS").val();
		
		$("#codProjetoS").val();
		$("#codAcaoS").val();
		$("#codRecursoS").val();
	}
}	

function atualizaZoomFilterAcao(codProjetoS)
{
    reloadZoomFilterValues("txt_acaoS", "txt_projetoS,"+codProjetoS);
}

function atualizaZoomFilterRecursos(codProjetoS, codAcaoS)
{
    reloadZoomFilterValues("txt_recursosS", "txt_projetoS,"+codProjetoS+",txt_acaoS,"+codAcaoS);
}



function copiarValores() {
    var pro = document.getElementsByClassName("projetoT");
    var tamanhoPro = pro.length;
    var projetoValue = document.getElementsByClassName("projetoT")[1].getElementsByTagName("input")[0].value;
    var projetoIndex = document.getElementsByClassName("projetoT")[1].getElementsByTagName("input")[0].id.split("_")[2];

      if (tamanhoPro > 2) {
        for (var i = 2; i < tamanhoPro; i++) {
          var index = pro[i].getElementsByTagName("input")[0].id.split("_")[2];
          document.getElementById("txt_codprojetoT___" + index).value =
            document.getElementById("txt_codprojetoT___" + projetoIndex).value;
        }

        for (var i = 2; i < tamanhoPro; i++) {
          pro[i].getElementsByTagName("input")[0].value = projetoValue;
        }
      }
}


var Reunioes = (DatasetFactory.getDataset("Cadastro de Reunião DIREX", null, null, null)).values;

function dataAtual() {
    var today = new Date();
    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    return parseInt(year + month + day);
}

function converterData(dateString) {
    if (!dateString) return 0;
    return parseInt(dateString.replace(/-/g, ""));
}

function formatarData(dateString) {
    if (!dateString) return "";
    var partes = dateString.split("-");
    return partes[2] + "-" + partes[1] + "-" + partes[0];
}

function listarDatasFuturas() {
    var tamanho = Reunioes.length;
    var dataReuniao = dataAtual();
    var selectReuniao = document.getElementById("txt_Reuniao");

    if (!selectReuniao) {
        console.error("Elemento select com id 'txt_Reuniao' não encontrado.");
        return;
    }

    selectReuniao.innerHTML = "";

    console.clear();
    console.log("Listando todas as reuniões futuras:");

    for (var i = 0; i < tamanho; i++) {
        var dataInicio = Reunioes[i].dt_dataInicio;

        if (dataInicio) {
            var dataInicioNumber = converterData(dataInicio);

            if (dataInicioNumber > dataReuniao) {
                var dataFormatada = formatarData(dataInicio);

                var option = document.createElement("option");
                option.value = dataInicio;
                option.textContent = dataFormatada;
                selectReuniao.appendChild(option);

                console.log("Adicionada Data: " + dataFormatada);
            }
        } else {
            console.error("Registro ignorado: Não possui datas válidas para Reunião.");
        }
    }
}

listarDatasFuturas();