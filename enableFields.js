function enableFields(form) {
	var Now_State = parseInt(getValue("WKNumState"));
	form.setEnabled("cmb_NomeSolicitante", false);


	if (Now_State == 7) {
		disableAllFields(form);
		fields = ['justificativa_gerencia']
		enableFieldsFromList(form, fields)
	}

	if (Now_State == 6) {
		disableAllFields(form);
		fields = ['conclusao']
		enableFieldsFromList(form, fields)
	}

	if (Now_State == 8 || Now_State == 13 || Now_State == 15) {
		disableAllFields(form)
	}
}

function disableAllFields(form) {

	var fields = form.getCardData();
	var iterare = fields.keySet().iterator();
	while (iterare.hasNext()) {
		var key = iterare.next();
		form.setEnabled(key, false, false);
	}
}

function enableFieldsFromList(form, fields) {
	for (var i = 0; i < fields.length; i++) {
		form.setEnabled(fields[i], true);
	}
} 