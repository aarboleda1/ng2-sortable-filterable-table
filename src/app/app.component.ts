import { Component, OnInit, NgModule } from '@angular/core';
import { httpService } from './http-service.service';

import { FilterPipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [httpService],
})

@NgModule({
    imports: [],
    declarations: [
        FilterPipe,
    ],
    bootstrap: [],
    providers: [httpService]
})

export class AppComponent {
  title = 'Comment Table';
  instructions = 'Welcome to this Filterable Table!';
  public data:Array<any>;
  public dataCopy: Array<any>;
  public keys:Array<any>;
  public numItems:number;

  
  constructor (private httpService: httpService) {
   }
  ngOnInit() {
    //http call to get comment service
    this.httpService.getComments()
      .subscribe(
        data => {
          this.data = data;
          this.dataCopy = data; // make a copy to re render if search is empty
          this.numItems = data.length;          
        },
        error => alert(error),
      )
  }
  // sort by id because it's a numerical sort
  sortById () {
    this.data.sort(function(a, b) {
      return a.id - b.id;
    });
  }
  // sort alphabetically, by name, email, and first word in body of paragraph  
  sortByColumn (columnName) {
    this.data.sort(function(a, b) {
      var commentA = a[columnName].toUpperCase(); // ignore upper and lowercase
      var commentB = b[columnName].toUpperCase(); // ignore upper and lowercase
      if (commentA < commentB) {
        return -1;
      }
      if (commentA > commentB) {
        return 1;
      }
      return 0;
    });    

  } 
}
