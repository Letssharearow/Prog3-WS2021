import { Component, Input } from '@angular/core';

@Component({
  selector: 'Column',
  templateUrl: './Column.component.html',
  styleUrls: ['./Column.component.scss'],
})
export class Column {
  @Input()
  columnName = 'My Board';
  addItem() {
    this.Items.push('');
  }
  Items = ['First Input', 'Second Input', 'Third Input'];
}
