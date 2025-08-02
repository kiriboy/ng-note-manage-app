import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'importantFirst'
})
export class ImportantFirstPipe implements PipeTransform {
 transform(notes: any[]): any[] {
    return notes?.slice().sort((a, b) => (b.isImportant ? 1 : 0) - (a.isImportant ? 1 : 0));
  }

}
