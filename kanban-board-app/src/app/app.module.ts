import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { board } from 'src/lib/ui/board/board.component';
import { Item } from 'src/lib/ui/Column/Item.component';
import { Column } from 'src/lib/ui/ColumnList/Column.component';
import { UiModule } from '../lib/ui/toolbar/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, Item, board, Column],
  imports: [BrowserModule, AppRoutingModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
