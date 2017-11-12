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
            // interface Search {
            //   searchString : string,
            //   searchResults : string,
            //   showResults : boolean,
            //   titles : []
            //
            // }
            SearchComponent = (function () {
                // initialize variables
                function SearchComponent(httpService) {
                    this.httpService = httpService;
                    this.searchString = "";
                    this.searchResults = "";
                    this.showResults = false;
                    this.titles = [];
                }
                ;
                // functions
                SearchComponent.prototype.modifyResults = function () {
                    if (this.searchResults !== "") {
                        this.showResults = true;
                        var div = document.createElement("div");
                        div.innerHTML = this.searchResults;
                        var nodes = div.getElementsByTagName("h3");
                        for (var i = 0; i < nodes.length; i++) {
                            if (nodes[i].lastElementChild !== null) {
                                this.titles.push({
                                    "label": nodes[i].lastElementChild.text,
                                    "href": nodes[i].lastElementChild.href
                                });
                            }
                        }
                        console.log("this.titles", this.titles);
                    }
                };
                SearchComponent.prototype.onSearchClick = function () {
                    var _this = this;
                    this.httpService.getSearchResults(this.searchString)
                        .subscribe(function (data) { return _this.searchResults = data; }, function (error) { return alert(error); }, function () { return _this.modifyResults(); });
                };
                SearchComponent.prototype.keyDownFunction = function (event) {
                    if (event.keyCode == 13) {
                        // rest of your code
                        this.onSearchClick();
                    }
                };
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'sp-search',
                        templateUrl: './templates/search.html',
                        styleUrls: ['../style.css'],
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