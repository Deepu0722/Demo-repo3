import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic-ang',
  template: `<div>
                 <h1>{{parentData}}</h1>
                 <button (click)="childEventHandler()">Event Emitter</button>
  
                <h1 class="test-green"> class attribute </h1>
                <h1 [class.test-red]="applySplcls"> classproperty Binding </h1>
                <h1 [ngClass]="objClasses">ngclass directive Binding </h1>

                <h2 [style.color]="'pink'"> Style Binding </h2>
                <h2 [style.color]="hascolor ? 'yellow':'black'"> conditionalStyle Binding </h2>
                <h2 [style.color]="applystyle"> propertyStyle Binding</h2>
                <h2 [ngStyle] = "objStyle"> ngStyle Binding </h2>
                
               </div>`,
  styles: [` 
             .test-red {
               color:red;
             }
             .test-green {
               color:green;
             }
             .test-italic{
               font-style: italic;
             }
           `]
})
export class BasicAngComponent implements OnInit {
  public applySplcls = true;
  public objClasses = {
    "test-red" : this.applySplcls,
    "test-green" : !this.applySplcls,
    "test-italic" : this.applySplcls
  }
  public applystyle="orange";
  public hascolor = true;
  public objStyle= {
      color: "blue",
      fontStyle: "bold"
  };

  @Input() public parentData:any;
  @Output() public childEvent = new EventEmitter();  

  constructor() { }

  ngOnInit(): void {
  }
  childEventHandler(){
     this.childEvent.emit("Hello Parent !!!"); 
  }

}
