import { Component } from 'angular2/core' ;
import { ApiService } from "./api.service";

interface Search {
  searchString : string,
  results : string
}

@Component({
  selector : 'sp-search',
  templateUrl : './templates/search.html',
  providers : [ApiService]
})

export class SearchComponent{

  search : Search = {
    searchString : "",
    results : ""
  };

  // initialize variables


  // functions

  constructor( private httpService : ApiService) {}

  onSearchClick(search : Search){
    console.log("search string", search)
    this.httpService.getSearchResults()
      .subscribe(
        data => this.search.results = data,
         error => alert(error),
        () => console.log("data >>", this.search.results)
      );
  }
}

