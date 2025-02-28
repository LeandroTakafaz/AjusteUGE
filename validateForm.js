function validateForm(form){

    var tabela = form.getChildrenIndexes("asd");
    var Now_State = getValue("WKNumState");
    var errors = [];
    var TipoServico = form.getValue("TipoServico");
    var Objetivo = form.getValue("Objetivo");
    var Metricas = form.getValue("Metricas");


    if (Now_State == 0 || Now_State == 14) {
        if(form.getValue("TipoServico") == ""){
            errors.push("Campo Tipo de Solicitação não foi preenchido.");
        }


        if(Now_State == 14 && TipoServico == "1") {
            if(form.getValue("Objetivo") == "") {
                errors.push("Campo Objetivo não foi preenchido");
            }
            if(form.getValue("valorAjuste___1") == ""){
                errors.push("Campo Valor não foi preenchido.");
            }
            if(form.getValue("valorAjuste___2") == ""){
                errors.push("Campo Valor não foi preenchido.");
            }
            if(form.getValue("valorAjuste___3") == ""){
                errors.push("Campo Valor não foi preenchido.");
            }
            if(form.getValue("valorAjuste___4") == ""){
                errors.push("Campo Valor não foi preenchido.");
            }
            if(form.getValue("valorAjuste___5") == ""){
                errors.push("Campo Valor não foi preenchido.");
            }
            if(form.getValue("fonteRec___1") == ""){
                errors.push("Campo Origem do Recurso não foi preenchido.");
            }
            if(form.getValue("fonteRec___2") == ""){
                errors.push("Campo Origem do Recurso não foi preenchido.");
            }
            if(form.getValue("fonteRec___3") == ""){
                errors.push("Campo Origem do Recurso não foi preenchido.");
            }
            if(form.getValue("fonteRec___4") == ""){
                errors.push("Campo Origem do Recurso não foi preenchido.");
            }
            if(form.getValue("fonteRec___5") == ""){
                errors.push("Campo Descrição e Justificativa do Ato não foi preenchido.");
            }
            if(form.getValue("Detalhes___1") == ""){
                errors.push("Campo Descrição e Justificativa do Ato não foi preenchido.");
            }
            if(form.getValue("Detalhes___2") == ""){
                errors.push("Campo Descrição e Justificativa do Ato não foi preenchido.");
            }
            if(form.getValue("Detalhes___3") == ""){
                errors.push("Campo Descrição e Justificativa do Ato não foi preenchido.");
            }
            if(form.getValue("Detalhes___4") == ""){
                errors.push("Campo Descrição e Justificativa do Ato não foi preenchido.");
            }
            if(form.getValue("Detalhes___5") == ""){
                errors.push("Campo Descrição e Justificativa do Ato não foi preenchido.");
            }
        }

        if(Now_State == 14 && TipoServico == "1" && Objetivo == "Acresc" ) {
            if(tabela.length==0){
                errors.push("Painel de Ajuste Orçamentário não inserido.");
            }
            if(form.getValue("Inovacao___1") == ""){
                errors.push("Campo Valor Inovação não foi preenchido.");
            }
            if(form.getValue("Inovacao___2") == ""){
                errors.push("Campo Valor Inovação não foi preenchido.");
            }
            if(form.getValue("Inovacao___3") == ""){
                errors.push("Campo Valor Inovação não foi preenchido.");
            }
            if(form.getValue("Inovacao___4") == ""){
                errors.push("Campo Valor Inovação não foi preenchido.");
            }
            if(form.getValue("Inovacao___5") == ""){
                errors.push("Campo Valor Inovação não foi preenchido.");
            }
            if(form.getValue("Convenio___1") == ""){
                errors.push("Campo Valor Convênio não foi preenchido.");
            }
            if(form.getValue("Convenio___2") == ""){
                errors.push("Campo Valor Convênio 2 não foi preenchido.");
            }
            if(form.getValue("Convenio___3") == ""){
                errors.push("Campo Valor Convênio 3 não foi preenchido.");
            }
            if(form.getValue("Convenio___4") == ""){
                errors.push("Campo Valor Convênio 4 não foi preenchido.");
            }
            if(form.getValue("Convenio___5") == ""){
                errors.push("Campo Valor Convênio 5 não foi preenchido.");
            }
            if(form.getValue("Receita___1") == ""){
                errors.push("Campo Valor Receita REB não foi preenchido.");
            }
            if(form.getValue("Receita___2") == ""){
                errors.push("Campo Valor Receita REB 2 não foi preenchido.");
            }
            if(form.getValue("Receita___3") == ""){
                errors.push("Campo Valor Receita REB 3 não foi preenchido.");
            }
            if(form.getValue("Receita___4") == ""){
                errors.push("Campo Valor Receita REB 4 não foi preenchido.");
            }
            if(form.getValue("Receita___5") == ""){
                errors.push("Campo Valor Receita REB 5 não foi preenchido.");
            }
            if(form.getValue("Aumento___1") == ""){
                errors.push("Campo Aumento Público/Atendimento não foi preenchido.");
            }
            if(form.getValue("Aumento___2") == ""){
                errors.push("Campo Aumento Público/Atendimento 2 não foi preenchido.");
            }
            if(form.getValue("Aumento___3") == ""){
                errors.push("Campo Aumento Público/Atendimento 3 não foi preenchido.");
            }
            if(form.getValue("Aumento___4") == ""){
                errors.push("Campo Aumento Público/Atendimento 4 não foi preenchido.");
            }
            if(form.getValue("Aumento___5") == ""){
                errors.push("Campo Aumento Público/Atendimento 5 não foi preenchido.");
            }
        }

        if(Now_State == 14 && TipoServico == "2") {
            if(form.getValue("Metricas") == "") {
                errors.push("Campo Métricas não foi preenchido");
            }

            if(Now_State == 14 && TipoServico == "2" && Objetivo == "Dimin") {
                if(tabela.length==0){
                    errors.push("Painel de Ajuste Orçamentário não inserido.");
                }
            }
        }

        if(Now_State == 14 && TipoServico == "2" && Metricas == "Evento") {
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