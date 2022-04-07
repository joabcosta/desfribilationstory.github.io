import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-canvas',
  template: `
    <canvas #canvas width="600" height="300"></canvas>
  `,
  styles: ['canvas { border-style: solid }']
})
export class CanvasComponent implements AfterViewInit {
  /*@ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;  *
  //private ctx: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;

  @ViewChild('canvas',{static: true}) 
  private mycanvas!: TemplateRef<HTMLCanvasElement>
  public canvas: ElementRef = {} as ElementRef;  
  public ctx!: CanvasRenderingContext2D;
  constructor() {
    
  }*/
  ngAfterViewInit(): void {
    
  }
  


  

}