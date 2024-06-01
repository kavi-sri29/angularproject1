import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { MathematicsService } from 'src/services/mathematics.service';
import { PhysicsService } from 'src/services/physics.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  @Input() subjectChild:any;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor(public _maths: MathematicsService,
    public _physics: PhysicsService
  ) { }

  ngOnInit(): void {
  }


  clickable(){
    const data = "Hi I am from Left Child Component";
    this.newItemEvent.emit(data);
  }
  
}
