sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel", // Import JSONModel
    "sap/ui/Device",
    "com/incture/jsonmodel/model/models"
], function(UIComponent, JSONModel, Device, models) {
    "use strict";

    return UIComponent.extend("com.incture.jsonmodel.Component", {
        metadata: {
            manifest: "json"
        },

        init: function() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            var oModel = new JSONModel("model/data.json");
            this.setModel(oModel);

            // enable routing
            this.getRouter().initialize();

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
        }
    });
});
