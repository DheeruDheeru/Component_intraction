import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
    <div class="Child-box">
      <p>Child</p>
      {{ msg }}<br>
      <button class="btn" (click)="Send()">Pass</button>
    </div>
  `,
  styles: [`
    .Child-box{
      background-color:lightseagreen;
      color:white;
      font-family:Lucida Console;
      padding:1%;
      box-shadow: -3px 3px 4px 0px black;
      border-radius:5px;
      margin:5% 0% 0% 0%;
    }
    button.btn {
      border-radius: 3px;
      background-color: unset;
      border-color: black;
      color: white;
      width:50%;
      margin:10% 0% 10% 0%;
      box-shadow: -2px 2px 4px 1px black;
      text-shadow: -2px 2px 2px black;
    }
  `]
})
export class ChildComponentComponent implements OnInit {
  
  @Input() msg:string;

  msg1:string="Hello Parent";

  @Output() parentEvent = new EventEmitter<string>();

  constructor() { }

  Send(){
    this.parentEvent.emit(this.msg1);
  }

  ngOnChanges(){
    console.log("OnChanges");
  }

  ngOnInit() {
    console.log("OnInit");
  }
  
  ngDoCheck(){
    console.log("DoCheck");
  }

  ngAfterContentInit(){
    console.log("AfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("AfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("AfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked");
  }

  ngOnDestroy(){
    console.log("OnDestroy");
  }
}
