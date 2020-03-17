import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  template: `
    <div class="Parent-box">
      <p>Parent</p>
      {{ msg1 }}
      <app-child-component [msg]="message" (parentEvent)="recieve($event)"></app-child-component>
    </div>
  `,
  styles: [`
    .Parent-box{
      background-color:teal;
      color:white;
      border-radius:5px;
      width: 20%;
      height: 16%;
      padding:1%;
      font-family:Lucida Console;
      text-align:center;
      box-shadow: -2px 2px 6px 1px black
    }
  `]
})
export class ParentComponentComponent implements OnInit {

  message:string = "Hello Child";
  msg1:string;

  recieve($event){
    this.msg1 = $event;
  }

  constructor() { }

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
