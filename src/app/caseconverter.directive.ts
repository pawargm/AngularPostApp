import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCaseconverter]'
})
export class CaseconverterDirective {

  @Input() text:any
  constructor(private eleRef:ElementRef) { }

  @HostListener('blur') onBlur() {
    console.log(this.text)
    if(this.text == "lowercase") {
      let value:string = this.eleRef.nativeElement.value;
      this.eleRef.nativeElement.value = value.toLowerCase()
    } else {
      let value:string = this.eleRef.nativeElement.value;
      this.eleRef.nativeElement.value = value.toUpperCase()
    }
  }

}
