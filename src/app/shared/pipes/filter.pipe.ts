import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, categoryText: string): any[] {
    console.log('item2', items)
    if (items && items.length) {
      return items.filter(item => {
        if (
          searchText &&
          item.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1
        ) {
          return false;
        }
        if (
          categoryText &&
          (item.genres.indexOf(categoryText.toLowerCase()) === -1 || item.genres.indexOf(categoryText))
        ) {
          console.log('categoryText', categoryText)

          return false;
        }
        console.log('item', items)
        return true;
      });
    } else {
      return items;
    }
  }
}
