// Define controller
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/Sorter",
    "sap/ui/model/GroupSorter"
], function(Controller, ODataModel, Sorter, GroupSorter) {
    "use strict";

    return Controller.extend("com.incture.project9asg10.3.controller.View1", {
        onInit: function() {
            // Create an OData model
            var oModel = new ODataModel("https://services.odata.org/v2/northwind/northwind.svc/");

            // Create a sorter to sort by a specific property 
            var oSorter = new Sorter("ShipName");

            // Create a group sorter to group the list by a specific property
            var oGroupSorter = new GroupSorter("ShipName");

            // Create a list
            var oList = this.getView().byId("invoiceList");

            // Bind the list to the OData service and apply sorters and group sorter
            oList.bindItems({
                path: "/Invoices",
                sorter: oSorter,
                parameters: {
                    group: {
                        path: "ShipName",
                        sorter: oGroupSorter
                    }
                },
                template: new sap.m.StandardListItem({
                    title: "{ShipName}",
                    description: "{ShipAddress}"
                })
            });

            // Set the OData model to the view
            this.getView().setModel(oModel);
        }
    });
});

