import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild(ChildComponent) childComponentRef: ChildComponent;
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.childComponentRef.message = "message from parent component";
  }
  parentCenter(recivedName: string) {
    alert(recivedName);
  }

}













  // userLoggedIn = true;
  // @ViewChild(ChildComponent) childComponentRef: ChildComponent;
  // ngAfterViewInit(): void {
  //   this.childComponentRef.message = 'Message from parent class';
  // }
