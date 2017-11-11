import { Component } from 'angular2/core' ;
import { ApiService } from "./api.service";

interface Search {
  searchString : string,
  searchResults : string,
  titles: [],
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
      titles : [],
      showResults : false
    };


  // initialize variables
  constructor( private httpService : ApiService) {};


  // functions

  modifyResults(){
    if(this.searchObj.searchResults !== ""){
      this.searchObj.showResults = true;



      const div = document.createElement("div");
      div.innerHTML = this.searchObj.searchResults;
      const nodes = div.getElementsByTagName("h3");
      for(var i=0; i<nodes.length; i++) {
        if(nodes[i].lastElementChild !== null){
          searchObj.titles.push(nodes[i].lastElementChild.text);

        }

      }


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

