jQuery.sap.declare("sap.myApp.Component");

sap.ui.core.UIComponent.extend("sap.myApp.Component", {

	metadata: {
       manifest: "json"
    }    
  ,


  /**
	 * !!! The steps in here are sequence dependent !!!
	 */
  init : function() {
	  
	  // 1. call overridden init (calls createContent)
	  sap.ui.core.UIComponent.prototype.init.apply(this, arguments); 	    
	  
  },

  destroy : function() {
	  // call overridden destroy
	  sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);
  },

 /* createContent : function() {
	  // create root view
	  var oView = sap.ui.view({
									    viewName : "sap.myApp.view.App",
									    type : "XML",
									    viewData : {
										    component : this
									    }
	  				});
	  
		
	  // done
	  return oView;
  }*/
});