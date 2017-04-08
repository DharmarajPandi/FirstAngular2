import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import {ProductModule} from './Product/Product.module';

@NgModule({
  imports: [ BrowserModule ,HttpModule,
  RouterModule.forRoot([{path:'Welcome',component:WelcomeComponent},
  {path:'',redirectTo:'Welcome',pathMatch:'full'}])
 ,ProductModule],
  declarations: [ AppComponent,WelcomeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
