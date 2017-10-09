sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("CustomControlCustomControl.controller.View1", {
		onRatingChanged:function(oEvent){
			var iValue = oEvent.getParameter("value");
			MessageToast.show("Your new rating value is:" + iValue);
		}
	});
});