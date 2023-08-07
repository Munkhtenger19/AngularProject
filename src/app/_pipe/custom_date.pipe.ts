import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom_date',
  pure: true
})
export class Custom_datePipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      const date = new Date(value);
      const options = { month: 'short', day: 'numeric', year: 'numeric' } as const;
      return date.toLocaleDateString('en-US', options);
    } else {
      return 'None';
    }
  }
}
