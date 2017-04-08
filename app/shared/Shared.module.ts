import {StarComponent} from '../shared/star.component';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
imports:[BrowserModule],
declarations:[StarComponent],
exports:[BrowserModule,StarComponent,FormsModule]
})
export class SharedModule{


}
