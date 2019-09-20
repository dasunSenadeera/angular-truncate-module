import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TruncatePipeModule } from './pipes/truncate.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, TruncatePipeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
