import { Directive , ElementRef , Renderer} from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  host : {
    '(click)' : 'changeColorFunction()'
  }
})
export class ChangeColorDirective {

  constructor(private el : ElementRef , private render : Renderer) {

   }
   count : number = 0;
  changeColorFunction(){
    if(this.count == 0){
      this.render.setElementStyle(this.el.nativeElement , 'backgroundColor','yellow')
    }else{
      this.render.setElementStyle(this.el.nativeElement , 'backgroundColor','red')
    }
    
    this.count = this.count+1;
    if(this.count > 1){
      this.count = 0;
    }
  }
}
