import { Component } from 'angular2/core' ;

interface Search {
  searchString : string
}

@Component({
  selector : 'sp-search',
  templateUrl : './templates/search.html',
})

export class SearchComponent{

  search : Search = {
    searchString : ""
  }

  // initialize variables


  // functions

  onSearchClick(search : Search){
    console.log("search string", search)
  }
}

