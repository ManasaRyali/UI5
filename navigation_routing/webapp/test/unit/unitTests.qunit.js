/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cominctu/navigation_routing/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
