import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from '../lib/ui/Liste/Liste.component';
import { ToolbarComponent } from '../lib/ui/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
