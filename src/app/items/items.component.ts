import { Component, OnInit } from '@angular/core';

import { Item } from '../models/item.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  public dataSource: Item[] = [
    {
      name: 'Pizza',
      price: 3,
    },
    {
      name: 'Salad',
      price: 2,
    },
  ];

  displayedColumns: string[] = ['name', 'price'];

  constructor() {}

  ngOnInit() {}

  addToCart() {
    window.alert('Added');
  }
}
