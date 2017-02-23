import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class httpService {
  // using a jsonplaceholder to fill table and test properly
  private baseURL: string = 'https://jsonplaceholder.typicode.com/comments'
  constructor(private http: Http) { }
     getComments() {
      return this.http.get(this.baseURL)
        .map((res: Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
  
}
