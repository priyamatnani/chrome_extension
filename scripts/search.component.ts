import { Component } from 'angular2/core' ;
import { ApiService } from "./api.service";

interface Search {
  searchString : string,
  searchResults : string
  showResults : boolean

}

@Component({
  selector : 'sp-search',
  templateUrl : './templates/search.html',
  providers : [ApiService]
})

export class SearchComponent{



  searchObj : Search = {
      searchString : "",
      searchResults : "",
      showResults : false
    };


  // initialize variables
  constructor( private httpService : ApiService) {};


  // functions

  modifyResults(){
    console.log(" called from heeeee")
    if(this.searchObj.searchResults !== ""){
      this.searchObj.showResults = true;
    }
  }

  onSearchClick(){
    this.httpService.getSearchResults(this.searchObj.searchString)
      .subscribe(
        data => this.searchObj.searchResults = data,
         error => alert(error),
        () => this.modifyResults()
      );
  }


}

