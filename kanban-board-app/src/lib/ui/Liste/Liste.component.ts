import { Component, Input } from '@angular/core';

@Component({
  selector: 'Liste',
  templateUrl: './Liste.component.html',
  styleUrls: ['./Liste.component.scss'],
})
export class ListComponent {
  @Input()
  listName = 'My Board';
  click = 'console.log("hi");';
}
