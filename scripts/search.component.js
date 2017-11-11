System.register(['angular2/core', "./api.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, api_service_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                // initialize variables
                function SearchComponent(httpService) {
                    this.httpService = httpService;
                    this.searchObj = {
                        searchString: "",
                        searchResults: "",
                        showResults: false
                    };
                }
                ;
                // functions
                SearchComponent.prototype.modifyResults = function () {
                    console.log(" called from heeeee");
                    if (this.searchObj.searchResults !== "") {
                        this.searchObj.showResults = true;
                    }
                };
                SearchComponent.prototype.onSearchClick = function () {
                    var _this = this;
                    this.httpService.getSearchResults(this.searchObj.searchString)
                        .subscribe(function (data) { return _this.searchObj.searchResults = data; }, function (error) { return alert(error); }, function () { return _this.modifyResults(); });
                };
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'sp-search',
                        templateUrl: './templates/search.html',
                        providers: [api_service_1.ApiService]
                    }), 
                    __metadata('design:paramtypes', [api_service_1.ApiService])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map