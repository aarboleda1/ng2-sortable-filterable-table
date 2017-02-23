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
    if ( typeof comments === undefined) {
      return;
    }

    if (Number(input) >= 0) {
      return comments.filter((comment) => {
        return comment.id === Number(input);
      })
    } else if (typeof input === 'string') {
      return comments.filter((comment) => {        
        return comments = comment.email.toLowerCase().indexOf(input.toLowerCase()) >= 0 || 
        comment.body.toLowerCase().indexOf(input.toLowerCase()) >= 0 || 
        comment.name.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      })
    } else if (input.length > 0 && comments.length === 0) {
      console.log('hello world')
    }

  }


}
