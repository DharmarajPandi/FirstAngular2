import {NgModule} from '@angular/core';
import {ProductComponent} from './Product.component';
import {ProductFilterPipe} from './Product-Filter-Pipe';
import {ProductDetailComponent} from './Product_Detail.component';
import {RouterModule} from '@angular/router';
import {ProductGaurdService} from './Product-Gaurd.service';
import {ProductService} from './Product.service';
import {SharedModule} from '../shared/Shared.module';

@NgModule({
imports:[SharedModule,
   RouterModule.forChild([{path:'Products',component:ProductComponent},
  {path:'Product/:id',canActivate:[ProductGaurdService],component:ProductDetailComponent},
 ])],
declarations:[ProductComponent,ProductFilterPipe,ProductDetailComponent],
providers:[ProductGaurdService,ProductService]
})
export class ProductModule{


}
