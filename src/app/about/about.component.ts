import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs/internal/observable/interval';
import { take } from 'rxjs/internal/operators/take';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 user: User | null = null;

  @Input() subjectChild:any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    //const numbers = interval(1000).pipe(take(10));
    const ofOperator: Observable<number> = of(1,2,3,4,5,6,7,8,9,10).pipe(filter(f => f%2==0),map(m => m*100));
    ofOperator.subscribe(sub => {
      console.log(sub);
    })
  }








  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     const id = +params['id'];
  //     this.fetchUserData(id);
  //   });
  // }

  // fetchUserData(id: number): void {
  //   this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .subscribe(user => {
  //       console.log(user);
  //       this.user = user;
  //     });
  //   }

}
