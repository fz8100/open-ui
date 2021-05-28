import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './app/ui/ui.component';
import { HeaderComponent } from './app/ui/header/header.component';
import { ContentComponent } from './app/ui/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
