import { Component, Input } from '@angular/core';

@Component({
  selector: 'Column',
  templateUrl: './Column.component.html',
  styleUrls: ['./Column.component.scss'],
})
export class Column {
  @Input()
  columnName: string;
  getName() {
    this.items.push('new Column');
  }
  items = ['First Item', 'Second Item', 'Third Item'];
}
