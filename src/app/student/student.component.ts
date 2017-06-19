import { Student } from './student.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() 
  studant: Student

  constructor() { }

  ngOnInit() {
  }

  clicked(){
    console.log('Foi clicado no nome');
    
  }

}
