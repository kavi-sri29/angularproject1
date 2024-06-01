import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myobs = new Observable<string>(obs => {
      console.log('Start Observable');
      obs.next('100');
      obs.next('200');
      obs.next('300');
      
      console.log('End Observable');
      obs.complete();
      // The following error line won't be executed as complete has been called.
      obs.error('Not working');
    });

    myobs.subscribe(
      sub => {
        console.log('First ' + sub);
      },
      error => {
        console.log('Error ' + error);
      },
      () => {
        console.log('Completed');
      }
    );

    myobs.subscribe(
      sub => {
        console.log('First ' + sub);
      },
      error => {
        console.log('Error ' + error);
      },
      () => {
        console.log('Completed');
      }
    );
  }

}
