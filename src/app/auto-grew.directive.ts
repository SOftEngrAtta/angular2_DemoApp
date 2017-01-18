import { Directive , ElementRef ,Renderer} from '@angular/core';

@Directive({
  selector: '[appAutoGrew]',
  host : {
    '(doubleClick)' : 'onFocus()',
    '(mouseout)' : 'onBlur()'
  }
})
export class AutoGrewDirective {

  constructor(private el : ElementRef , private render : Renderer){

  }
  onFocus(){
    this.render.setElementStyle(this.el.nativeElement,'width','400px');
  }
  onBlur(){
    this.render.setElementStyle(this.el.nativeElement ,'width','120px');
  }
}
