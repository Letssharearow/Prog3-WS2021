import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'Item',
  templateUrl: './Item.component.html',
  styleUrls: ['./Item.component.scss'],
})
export class Item {
  @Output()
  deleteItem = new EventEmitter();

  @Input()
  itemName: string;
}
