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
    console.log(" called from heeeee",this.searchObj.searchResults)
    if(this.searchObj.searchResults !== ""){
      this.searchObj.showResults = true;


      const el = document.createElement( 'html' );
      el.innerHTML = this.searchObj.searchResults;

      console.log(el.getElementsByTagName( 'a' ))



      const div = document.createElement("div");
      div.innerHTML = this.searchObj.searchResults;
      var nodes = div.getElementsByTagName("a");
      var array = [];
      for(var i=0; i<nodes.length; i++) {
        array.push(nodes[i].innerHTML);
      }

      console.log(">>>",array)

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

