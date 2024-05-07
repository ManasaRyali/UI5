sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        return Controller.extend("com.incture.jsonmodel.controller.View2",{
            onInit: function(){
                this.getOwnerComponent().getRouter().getRoute("RouteView2").attachPatternMatched(this.onPatternMatched,this);
            },
            onBack: function(){
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            },
            onPatternMatched: function(oEvent){
                var index= oEvent.getParameter("arguments").Index;
                this.getView().bindElement("/aEmployees/"+ index);
        }
    });      
    });
    
