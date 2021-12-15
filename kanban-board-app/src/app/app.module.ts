import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColumnList } from 'src/lib/ui/ColumnList/ColumnList.component';
import { Column } from '../lib/ui/Column/Column.component';
import { UiModule } from '../lib/ui/toolbar/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, Column, ColumnList],
  imports: [BrowserModule, AppRoutingModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
