/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comincture/project9_asg-10.3/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
