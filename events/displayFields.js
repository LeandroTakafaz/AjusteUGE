function displayFields(form, customHTML) {

    var numProcesso = getValue("WKNumProces");

    var Now_State = parseInt(getValue("WKNumState"));
    form.setHidePrintLink(true);

    var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
    form.setValue("DataHora", data.format(new Date()));

    var usuario = getValue("WKUser");
	form.setValue("cmb_NomeSolicitante", usuario);
	//form.setValue("cmb_UnidadeSolicitante", usuario);

    if (Now_State != 0) {
        form.setValue("numProcesso", numProcesso);
    }

     if (Now_State == 0 || Now_State == 6 || Now_State == 8 || Now_State == 10 || Now_State == 13 || Now_State == 15) {
    form.setVisibleById("painel_parecer", false);
    }

    if (Now_State == 0 || Now_State == 7 || Now_State == 8 || Now_State == 10 || Now_State == 13 || Now_State == 15) {
    form.setVisibleById("painel_registro", false);
    }

    if (Now_State == 6 || Now_State == 8 || Now_State == 10 || Now_State == 13 || Now_State == 15) {
        form.setVisibleById("card_acres", false);
        form.setVisibleById("card_dimi", false);
        form.setVisibleById("painel_tipoServico", false);
        form.setVisibleById("addRateio", false);
        form.setVisibleById("addRateioT", false);
        ocultarCampo(customHTML, "delRateio");
        ocultarCampo(customHTML, "delRateioT");
    } 
}