import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DocktalkService } from './docktalk.service';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2AutoCompleteModule
  ],
  providers: [DocktalkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
