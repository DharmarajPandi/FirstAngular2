import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {IProduct} from './IProduct';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService
{
  data1:IProduct[];
 constructor(private http:Http) {
     }

getProduct():Observable<IProduct[]>
{
  
return  this.http.get("api/products/products.json")
                         .map((res:Response) => <IProduct[]>res.json());
                         //.do(data=>console.log(JSON.stringify(data)))
                           //.catch(this.ErrorFn);
                         //.subscribe(Resp => this.data1=data, error => console.log('error'));
}

private ErrorFn(resp:Response){

  return Observable.throw("ErrorFromHere");
}
} 

