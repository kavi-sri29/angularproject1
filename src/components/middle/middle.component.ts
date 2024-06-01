import { Component, OnInit,Input } from '@angular/core';
import { MathematicsService } from 'src/services/mathematics.service';
@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css'],
  
})
export class MiddleComponent implements OnInit {

  @Input() subject:any;

  constructor(public _maths: MathematicsService) { }
  
  btnToggle: boolean = true;

  ngOnInit(): void {
      setTimeout(() => {
        this.btnToggle = false;
      },5000);
  }

  bookId: number =  67;
  bookName: string = "Thulazi";
  author: string = "Balakumaran";
  bookStatus: string = "Available";


  onToggle(){
    if(this.bookStatus == "Available"){
        this.bookStatus = "Not Available";
    }
    else{
      this.bookStatus = "Available";
    }
  }

  onmiddleIncrement(){
    this._maths.addOne();
  }

}
