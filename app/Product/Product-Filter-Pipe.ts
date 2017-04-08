import {Pipe,PipeTransform} from '@angular/core';
import {IProduct} from './IProduct';


@Pipe({
name:'ProductFilter'
})
export class ProductFilterPipe implements PipeTransform{

transform(value:IProduct[],filterBy:string):IProduct[]{
    filterBy =filterBy?filterBy.toLocaleLowerCase():null;
    return filterBy? value.filter(product=>product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1||
    product.productCode.toLocaleLowerCase().indexOf(filterBy)!==-1):value
}

}