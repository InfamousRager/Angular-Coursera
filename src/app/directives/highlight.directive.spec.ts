import { ElementRef, Renderer2} from '@angular/core';
import { HighlightDirective } from './highlight.directive';

let elementRef: ElementRef;
let renderer2: Renderer2;

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(elementRef,renderer2);
    expect(directive).toBeTruthy();
  });
});
