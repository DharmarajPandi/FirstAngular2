import {Component,OnChanges,Input,EventEmitter,
Output} from  '@angular/core';


@Component({
selector:'Au-Star',
moduleId:module.id,
templateUrl:'star.component.html',
styleUrls:['star.component.css']
})
export class StarComponent implements OnChanges{
@Input() rating :number=4;
@Output() EventStar:EventEmitter<string>=new EventEmitter<string>();
starWidth:number;

 ngOnChanges():void{
    this.starWidth=this.rating*86/5;
 }


myFunction(){
  return this.EventStar.emit(`This ${this.rating}Clicked`);
}

}