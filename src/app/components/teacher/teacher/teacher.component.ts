import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private _interactService: InteractionService) { }

  ngOnInit() {
  }
  greetStudents(){
    this._interactService.sendMessage('Good Morning');
  }
  appreciateStudents(){
    this._interactService.sendMessage('Well Done');

  }
}
