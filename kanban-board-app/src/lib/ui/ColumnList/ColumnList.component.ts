import { Component, Input } from '@angular/core';

@Component({
  selector: 'ColumnList',
  templateUrl: './ColumnList.component.html',
  styleUrls: ['./ColumnList.component.scss'],
})
export class ColumnList {
  @Input()
  columnName = 'My Board';
  getName() {
    this.Item.push('new Column');
  }
  Item = [];
}
