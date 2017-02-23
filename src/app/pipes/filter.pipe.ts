import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(comments: any, input: any): any {
    // if no searchInput, return all comments
    if (input === undefined) {
      return comments;
    };
    if (input.length === 0) {
      return comments;
    };
    if (typeof comments === undefined) {
      return;
    }

    if (Number(input) >= 0) {
      return comments.filter((comment) => {
        return comment.id === Number(input);
      })
    } else if (typeof input === 'string') {
      var filteredComments = comments.filter((comment) => {        
        return comment.email.toLowerCase().indexOf(input.toLowerCase()) >= 0 || 
        comment.body.toLowerCase().indexOf(input.toLowerCase()) >= 0 || 
        comment.name.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      });
      
      //Error handling for filtering, return not found in all rows if bad search 
      var notFound = [{id: 'not found', name: 'not found', email: 'not found', body: 'not found'}]      
      return filteredComments.length > 0 ? filteredComments : notFound;

    } else if (input.length > 0 && comments.length === 0) {
      console.log('hello world')
    }

  }


}
