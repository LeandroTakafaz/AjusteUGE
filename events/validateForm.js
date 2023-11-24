function validateForm(form){

    var tabela = form.getChildrenIndexes("asd");
    var Now_State = parseInt(getValue("WKNumState"));
    var errors = [];
    var TipoServico = form.getValue("TipoServico");
    var Objetivo = form.getValue("Objetivo");
    var Metricas = form.getValue("Metricas");

    if (Now_State == 4 || Now_State == 0) {
        if(form.getValue("TipoServico") == ""){
            errors.push("Campo Tipo de Solicitação não foi preenchido.");
        }

        if(Now_State == 4 && TipoServico == "1") {
            if(form.getValue("Objetivo") == "") {
                errors.push("Campo Objetivo não foi preenchido");
            }
        }

        if(Now_State == 4 && TipoServico == "1" && Objetivo == "Acresc" ) {
            if(tabela.length==0){
                errors.push("Painel de Ajuste Orçamentário não inserido.");
            }
        }

        if(Now_State == 4 && TipoServico == "2") {
            if(form.getValue("Metricas") == "") {
                errors.push("Campo Integração de Dados não foi preenchido");
            }

            if(Now_State == 4 && TipoServico == "2" && Objetivo == "Dimin") {
                if(tabela.length==0){
                    errors.push("Painel de Ajuste Orçamentário não inserido.");
                }
            }
        }

        if(Now_State == 4 && TipoServico == "2" && Metricas == "Evento") {
            if(form.getValue("cod_evento") == ""){
                errors.push("Campo de Código do Evento no SAS não foi preenchido");
            }
        }

    }

    if (Now_State == 7) {
        if(form.getValue("justificativa_gerencia") == ""){
            errors.push("Campo Justificativa UGE não foi preenchido.");
        }

    }
    
    if (errors.length > 0) {
      throw errors.join("\n");
    }
}