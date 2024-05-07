sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.incture.odata.controller.App", {
        onInit: function() {
        },
      onCreate: function(){
        var oDataMdl=this.getOwnerComponent().getModel();
        var sPath="/Customers";
        var oData=[{
          "ProductID":"12345",
          "ProductName":"INCTURE Product"
        }];
        oDataMdl.create(sPath,JSON.stringify(oData)),{
          success: function(oSuccess){

          },
         error:function(oError){
          
         }
        }
      }
    
      });
    });
  