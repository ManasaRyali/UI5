  sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ], function(Controller) {
        "use strict";
    
        return Controller.extend("com.incture.project2.controller.View1", {
            onInit: function() {
                // Get reference to the label
                var oLabel = this.byId("myLabel");

    
                // Add style class to the label
                oLabel.addStyleClass("myBackground");

                
            }
            ,onsubmit:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView2");
            }
        });
    });
    