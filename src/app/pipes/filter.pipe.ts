import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(comments: any, input: any): any {
    // if no searchInput, return all comments
    if (input === undefined) return comments;
    if (Number(input) >= 0) {
      return comments.filter((comment) => {
        return comment.id === Number(input);
      })
    } else {
      return comments.filter((comment) => {        
        return comment.email.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      })
    }
  }


}
