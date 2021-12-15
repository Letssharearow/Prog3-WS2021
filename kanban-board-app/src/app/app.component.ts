import { Component, OnInit } from '@angular/core';
import { CustomTitleService } from 'src/lib/feature/custom-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnInit {
  columns = ['Backlog', 'Open', 'In Progress'];

  title = 'kanban-board-app';
  constructor(private customTitleService: CustomTitleService) {}

  ngOnInit(): void {
    this.customTitleService.updateCustomPageTitle();
  }
}
