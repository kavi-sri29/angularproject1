import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  ngOnInit(): void {
    
  }

  title = 'myapp';
  subjectParent = [
    {id:1, name:'Pneumonoultramicroscopicsilicovolcanoconiosis'},
    {id:2, name:'Supercalifragilisticexpialidocious'},
    {id:3, name:'Hippopotomonstrosesquippedaliophobia'},
    {id:4, name:'Antidisestablishmentarianism'},
    {id:5, name:'Social'}
  ]
  mytitle = "Hi I am from Parent Component";

  receivedData: string = '';
  today: number = Date.now();
  receivedDataFromChild(data: string){
    this.receivedData = data;
  }
}
