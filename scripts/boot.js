System.register(['angular2/platform/browser', './search.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, search_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(search_component_1.SearchComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map