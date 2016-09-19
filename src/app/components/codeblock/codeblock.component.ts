declare var Prism: any;
import { Directive, Component, Input, ElementRef, ContentChild } from '@angular/core';

@Directive({
  selector: '[lsu-codeblock]'
})
export class CodeBlockDirective {
  @Input()
  private language: string;

  private ele: any;
  constructor(ele: ElementRef) {
    this.ele = ele.nativeElement;
  }

  ngAfterViewInit() {
    this.ele.textContent = this.ele.textContent.replace(/\(\<\(/g, "{{");
    this.ele.textContent = this.ele.textContent.replace(/\)\>\)/g, "}}");
    this.ele.textContent = this.ele.textContent.replace(/\<\</g, "{");
    this.ele.textContent = this.ele.textContent.replace(/\>\>/g, "}");
    this.ele.textContent = this.ele.textContent.trimLeft();
    this.ele.textContent = this.ele.textContent.trimRight();
    this.ele.classList.add(`language-${this.language}`);
    this.ele.classList.add('line-numbers');
    Prism.highlightElement(this.ele);
  }
}