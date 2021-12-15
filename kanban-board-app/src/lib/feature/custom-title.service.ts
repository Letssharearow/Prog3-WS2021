import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class CustomTitleService {
  constructor(private title: Title) {}

  updateCustomPageTitle() {
    this.title.setTitle('Hello World!');
  }
}
