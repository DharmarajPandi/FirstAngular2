import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
    moduleId:module.id,
    templateUrl:'Product_Detail.component.html'
})
export class ProductDetailComponent implements OnInit {
 
PageTitle:string='ProductDetail';

constructor(private _CanActivate: ActivatedRoute,
private _route:Router){}

ngOnInit(){
this.PageTitle
let id= +this._CanActivate.snapshot.params['Id'];
this.PageTitle=`: ${id}`;
}
OnBack():void{

    this._route.navigate(['/Products'])
}

    
}