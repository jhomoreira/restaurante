import { RouterModule, Routes} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestaurantModule } from "./restaurants/restaurant.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppHttpService } from './app-http.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RestaurantModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
