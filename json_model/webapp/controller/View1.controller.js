sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator,Sorter) {
        "use strict";

        return Controller.extend("com.incture.jsonmodel.controller.View1", {
            onInit: function ()  {

            },
            onPress: function(){
              this.getOwnerComponent().getRouter().navTo("RouteView2");
            },

            onSelRelation: function(oEvent){
                var selRel = oEvent.getParameter("selectedItem").getText();
                console.log(selRel);
            },
            onSelrelCB: function(oEvent){
                var selRel = oEvent.getParameter("selectedItem").getText();
                console.log(selRel);
            },
            onSelLanguags: function(oEvent){
                var aLanItems = oEvent.getParameter("selectedItems");
               for(var i=0;i<aLanItems.length;i++){
              console.log(aLanItems[i].getText());
               }
          },
            onGender :function (oEvent){
              var index = oEvent.getParameter("selectedIndex");
              if(index===0){
              console.log("You are Male");
            }else if(index===1){
              console.log("You are Female");
          }else{
        console.log("You are Nuetral");
          }
         },
        onSelChbox:function(oEvent){
              var bIsChecked= oEvent.getParameter("selected");
              if(bIsChecked===true){
              console.log("it is selected")
             }else{
             console.log("it's not selected")
            }
        },
        onSelEmp: function(oEvent){
                var  sPath= oEvent.getParameter("listItem").getBindingContext().getPath();
               // console.log(empId);
              // alert(SPath);
              var index=sPath.split("/")[2];
              //alert(index);

               this.getOwnerComponent().getRouter().navTo("RouteView2",{
                Index: index
               });
        },
        onSearchEmp: function(oEvent){
           var value= oEvent.getParameter("newValue");
           var aFilters=[];
           if(value !==""){
             var oFilter= new Filter("empname",FilterOperator.Contains,value);
             aFilters.push(oFilter);
           }
           this.getView().byId("idListEmp").getBinding("items").filter(aFilters);
        },
        sortAsc: function(){
           var oSorter= new Sorter("empname", false);
           this.getView().byId("idListEmp").getBinding("items").sort(oSorter);
        },
        sortDesc: function(){
          var oSorter= new Sorter("empname", true);
          this.getView().byId("idListEmp").getBinding("items").sort(oSorter);
        },
        onF4HelpPress: function(){
          //alert("F4 help button access is pressed");
          if(!this._dialog){
            this._dialog= sap.ui.xmlfragment(this.getView().getId(),"com.incture.jsonmodel.view.EmpF4Help",this);
            this.getView().addDependent(this._dialog);
          }
          this._dialog.open();
        },
        onSelEmpFromF4Help: function(oEvent){
          var empId= oEvent.getParameter("listItem").getBindingContext().getProperty("empid");
          this.getView().byId("idIpEmpId").setValue(empId);
         // this._dialog.close();
          this.onClose();
        },
        onClose:function(){
          this._dialog.close();
        },
        onSubmit: function(){
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        }
    });
    });
    
