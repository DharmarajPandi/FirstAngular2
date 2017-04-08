import {Component} from '@angular/core';


@Component({
selector:'pm-app',
template:`<div> <h1>
hi from Componenet class {{PageTitle}}
</h1>
<ul>
<li><a [routerLink]="['/Welcome']">Home</a></li>
<li><a [routerLink]="['/Products']">Products</a></li>
</ul>
</div>
<div class='Container'>
<router-outlet></router-outlet>
</div>`

})
export class AppComponent{

    PageTitle:string ='My Componenet';
    
}