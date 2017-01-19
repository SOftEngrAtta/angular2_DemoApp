import { Directive , ElementRef ,Renderer} from '@angular/core';

@Directive({
  selector: '[appAutoGrew]',
  host : {
    '(click)' : 'onFocus()'
  }
})
export class AutoGrewDirective {
  private count : number = 0;
  constructor(private el : ElementRef , private render : Renderer){
  
  }
  onFocus(){
    if(this.count == 0){
      this.render.setElementStyle(this.el.nativeElement,'width','400px');    
    }
    if(this.count == 1){
      this.render.setElementStyle(this.el.nativeElement ,'width','120px');    
    } 
    this.count = this.count+1;
    if(this.count > 1){
      this.count = 0;
    }
  }
  // onBlur(){
  // }
}
