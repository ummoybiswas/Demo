sap.ui.controller("sap.myApp.controller.App", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf demo.App
*/
onInit: function() {
	
},

editController: function(evt){
	   var oCar  = evt.getSource().getBindingContext("Cars").getObject();
	   if(!oCar) sap.m.MessageToast.show("Please Select a row to Update");
	   else alert(oCar.carModel);
	
	//alert("OK edit");
},
deleteController: function(evt){
	alert("Ok delete");
},
onRowSelection: function(oEvent){
		console.log(oEvent);
	   //var oProduct  = oEvent.getParameter("listItem").getBindingContext().getObject();
	   //if(oProduct)	this.getRouter().navTo("product_display",{id:oProduct.id});
	   //console.log(oProduct);
		
},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf demo.App
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf demo.App
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf demo.App
*/
//	onExit: function() {
//
//	}

});