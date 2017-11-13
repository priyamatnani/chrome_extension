import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';

const API_URL = "https://www.google.com/";


@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  getSearchResults(searchString : string) {

    //
    // delete this.http. defaults.headers.common['X-Requested-With'];
    // this.http(
    //   {
    //     method : 'GET',
    //     url : API_URL + 'search?q=' + searchString
    //
    //   }).map(res => res.text())
    //   .success(function(data, status, headers, config) {
    //
    // }).error(function(data, status, headers, config) {
    //   debugger;
    //   console.log(data);
    // });



    return this.http.get(API_URL + 'search?q=' + searchString)
      .map(res => res.text());
  }


}
