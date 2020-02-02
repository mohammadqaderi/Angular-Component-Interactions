import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit, OnChanges {
  @Output() notifyEvent = new EventEmitter();
  constructor() {}
  name = "Mohammad";
  message: string;
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // tslint:disable-next-line: no-string-literal
    const loggedInValue = changes["loggedIn"];
    if (loggedInValue.currentValue === true) {
      this.message = "Welcome Back";
    } else {
      this.message = "Please Login";
    }
  }
  callParentCenter() {
    this.notifyEvent.emit(this.name);
  }
}

//  @Input() loggedIn: boolean ;
//  message: string;

//  ngOnChanges(changes: SimpleChanges): void {
//  console.log(changes);
//  const loggedInValue = changes['loggedIn'];
//  if(loggedInValue.currentValue === true){
//    this.message = 'Welcome back sir';
//  }else{
//    this.message = 'Please log in';
//  }
// displayMessage(){
//   alert(`Hello ${this.message}`);
// }
//  @Input() set loggedIn(value: boolean){
//    this._loggedIn = value;
//    if(value === true){
//      this.message = 'Welcome again sir';
//    }else{
//      this.message = 'Please login';
//    }
//  }
// get loggedInValue(){
//   return this.loggedIn;
// }
