import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 // books = null;\
 booksAvailable = [];
 booksNotAvailable = [];
  books = [
    {
      'bookId': 101,
      'bookName': 'Chemistry',
      'author': 'Fernandez',
      'bookStatus': 'Available',
      'category': 'Education'
    },
    {
      'bookId': 102,
      'bookName': 'Physics',
      'author': 'Fernandez',
      'bookStatus': 'Available',
      'category': 'Education'
    },
    {
      'bookId': 103,
      'bookName': 'Mathematics',
      'author': 'Fernandez',
      'bookStatus': 'Not Available',
      'category': 'Education'
    },
    {
      'bookId': 104,
      'bookName': 'Social Science',
      'author': 'Fernandez',
      'bookStatus': 'Available',
      'category': 'Education'
    },
    {
      'bookId': 105,
      'bookName': 'Tamil',
      'author': 'Fernandez',
      'bookStatus': 'Not Available',
      'category': 'Education'
    },
    {
      'bookId': 106,
      'bookName': 'English',
      'author': 'Fernandez',
      'bookStatus': 'Printing',
      'category': 'Education'
    },
  ]

    
}
