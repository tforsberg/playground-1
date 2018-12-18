import { Component } from '@angular/core';
import { CollectionView } from 'wijmo/wijmo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data = this.getData();
  
  private getData() {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < countries.length; i++) {
      data.push({
        country: countries[i],
        sales: Math.random() * 10000,
        expenses: Math.random() * 5000,
        downloads: Math.round(Math.random() * 20000),
      });
    }
    return new CollectionView(data);
  }

}
