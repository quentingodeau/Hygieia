/**
 * Controller for the dashboard route.
 * Render proper template.
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('SimpleViewTemplateController', SimpleViewTemplateController);

    SimpleViewTemplateController.$inject = [];
    function SimpleViewTemplateController() {
        var ctrl = this;

        ctrl.tabs = [
            { name: "Widget" }
        ];

        ctrl.widgetView = ctrl.tabs[0].name;
        ctrl.toggleView = function (index) {
            ctrl.widgetView = typeof ctrl.tabs[index] === 'undefined' ? ctrl.tabs[0].name : ctrl.tabs[index].name;
        };
    }
})();
