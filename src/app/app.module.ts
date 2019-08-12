import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    HomeModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
