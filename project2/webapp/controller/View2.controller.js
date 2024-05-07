sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("com.incture.project2.controller.View2", {
        onInit: function() {

        },
          OnBack: function(){
            this.getOwnerComponent().getRouter().navTo("RouteView1");
          }
        });
});
