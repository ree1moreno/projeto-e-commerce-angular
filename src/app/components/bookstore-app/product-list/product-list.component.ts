import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  livros: any;
  bookService: BookService;
  array = [
    {
      id: 1,
      name: 'Arsene Lupin - O Ladrão de Casaca',
      price: 24,
      quantity: 1,
      category: 'action',
      img: './../../../../assets/images/1011266346.jpg',
    },
    {
      id: 2,
      name: 'O Mundo de Sofia',
      price: 50,
      quantity: 2,
      category: 'romance',
      img: './../../../../assets/images/51xrMBKS-DL._SX332_BO1,204,203,200_.jpg',
    },
    {
      id: 3,
      name: 'Sherlock Holmes',
      price: 20,
      quantity: 3,
      category: 'action',
      img: './../../../../assets/images/714X4gjNs6L.jpg',
    },
    {
      id: 4,
      name: 'O Senhor dos Anéis',
      price: 10,
      quantity: 4,
      category: 'fantasy',
      img: './../../../../assets/images/71ZLavBjpRL.jpg',
    },
    {
      id: 5,
      name: 'Harry Potter',
      price: 15,
      quantity: 5,
      category: 'fantasy',
      img: './../../../../assets/images/becba34eb273ad15af40168776c19910.jpg',
    },
  ];
  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  ngOnInit(): void {
    // this.livros = this.bookService.getBook().subscribe((data) => {
    //   this.livros = data;
    // });

    this.livros = this.array;
  }
}
