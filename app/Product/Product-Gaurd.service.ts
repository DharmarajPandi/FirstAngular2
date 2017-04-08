import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
@Injectable()
export class ProductGaurdService implements CanActivate
{
canActivate():boolean{
    return true;}
}
