import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements AfterViewInit {
 pageTitle = 'interaction application';
 imgWidth = 300;
 name: string = '';
 count = 0;
 @ViewChild('nameRef') nameElementRef: ElementRef;
  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
  }

 incrementValue() {
this.count++;
 }
}
