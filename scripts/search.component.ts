import { Component } from 'angular2/core' ;
import { ApiService } from "./api.service";

// interface Search {
//   searchString : string,
//   searchResults : string,
//   showResults : boolean,
//   titles : []
//
// }

@Component({
  selector : 'sp-search',
  templateUrl : './templates/search.html',
  styleUrls : ['../style.css'],
  providers : [ApiService]
})

export class SearchComponent{

  searchString = "";
  searchResults = "";
  showResults = false;
  titles = [];


  // initialize variables
  constructor( private httpService : ApiService) {

  };


  // functions

  modifyResults(){
    if(this.searchResults !== ""){
      this.showResults = true;

      const div = document.createElement("div");
      div.innerHTML = this.searchResults;
      const nodes = div.getElementsByTagName("h3");
      for(var i=0; i<nodes.length; i++) {
        if(nodes[i].lastElementChild !== null){
          this.titles.push({
            "label" : nodes[i].lastElementChild.text,
            "href" : nodes[i].lastElementChild.href
          });
        }
      }

      console.log("this.titles",this.titles)

    }
  }

  onSearchClick(){
    this.httpService.getSearchResults(this.searchString)
      .subscribe(
        data => this.searchResults = data,
         error => alert(error),
        () => this.modifyResults()
      );
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      // rest of your code
      this.onSearchClick();
    }
  }


}

