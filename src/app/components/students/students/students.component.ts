import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private _interactService: InteractionService) { }

  ngOnInit() {
    this._interactService.teacherMessage$.subscribe(
      message => {
        if(message === 'Good Morning'){
          alert('Good Morning Teacher')
        }
        else if(message === 'Well Done'){
          alert('Thank You Teacher');
        }
      }
    )
  }

}
