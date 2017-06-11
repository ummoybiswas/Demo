sap.ui.controller("sap.myApp.controller.View1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf demo.App
*/
onInit: function() {
	
	 var model1 = new sap.ui.model.json.JSONModel();
	 model1.loadData("models/companies.json");
	 //console.log(model1);
     //sap.ui.getCore().setModel(model1);
     this.getView().byId("idCompanyTable").setModel(model1);
},

editController: function(evt){
	
   var oCompany  = evt.getSource().getBindingContext().getObject();
   if(!oCompany) sap.m.MessageToast.show("Please Select a row to Update");
   else {
	   this.getView().byId("name").setValue(oCompany.name);
	   this.getView().byId("city").setValue(oCompany.city);
	   this.getView().byId("revenue").setValue(oCompany.revenue);
	   this.getView().byId("btnSaveOrUpdate").setText("Update");
   }
	
	//alert("OK edit");
},
deleteController: function(evt){
	jQuery.sap.require("sap.m.MessageBox");
	 sap.m.MessageBox.confirm(
		"Are you sure want to delete the record",
		{
			icon: sap.m.MessageBox.Icon.INFORMATION,
			title: "Confirmation",
			actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
			initialFocus: sap.m.MessageBox.Action.NO,
			 onClose: function (oAction) {
				
				 if(oAction == "YES"){
					 alert("delete ok")
				 }
			 }
		}
	 );
},
onRowSelection: function(oEvent){
		alert("onRowSelection");
	   //var oCompany  = oEvent.getParameter("listItem").getBindingContext().getObject();
	   //if(oCompany)	this.getRouter().navTo("product_display",{id:oProduct.id});
	   //console.log(oCompany);
		
},
onUpdate:function(oEvent){
	alert("OK");
},
onReset:function(oEvent){
	alert("OK");
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