import {Component,OnInit} from '@angular/core';
import {IProduct} from './IProduct';
import {ProductService} from './Product.service';

@Component({
selector:'My-Product',
moduleId:module.id,
templateUrl:'Product.component.html',
styleUrls:['Product.component.css']

})
export class ProductComponent implements OnInit{

 constructor(private productService:ProductService){
     console.log('inside');
      
    }
errorMsg:any;
pageTitle:string="Product List";
imageWidth:number=50;
imageMargin:number=2;
showImage:boolean=false;
FilterValue:string ;
products:IProduct[];
toggleImage():void{
this.showImage=!this.showImage;

}
ngOnInit():void{

this.productService.getProduct().subscribe(resp=>this.products=resp,error=>this.errorMsg=error);

}


ParentFunc(data:string):void{
alert(data);
console.log(data);
}

}