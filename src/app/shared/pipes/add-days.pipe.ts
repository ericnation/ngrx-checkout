import { Pipe, PipeTransform } from '@angular/core';

/*
 This pipe can be chained on to the date pipe in order
 to add a number of days to a given date.

 */

@Pipe({
  name: 'addDays'
})
export class AddDays implements PipeTransform {

  transform(value: any, days): any {

    let currentDate = new Date();
    return currentDate.setDate(currentDate.getDate() + days);
  }

}
