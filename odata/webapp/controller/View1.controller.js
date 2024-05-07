sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.incture.odata.controller.View1", {
            onInit: function () {
               this.getSrvData();
            },

            getSrvData: function(){
                var oDataMd1=this.getOwnerComponent().getModel();
                var oLclMdl=this.getOwnerComponent().getModel("lclMdl");

                var oPath= "/Categories";
                oDataMd1.read(oPath,{
                    success:function(oSuccess){
                        oLclMdl.setSizeLimit(oSuccess.results.length);
                        oLclMdl.setProperty("/results",oSuccess.results);
                    },
                    error: function(oSuccess){
                        debugger;
                    }
                })
            }
        });
    });
