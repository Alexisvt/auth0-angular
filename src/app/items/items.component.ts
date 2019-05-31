import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Item } from '../models/item.interface';
import { ItemFormService } from '../services/item-form.service';

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

  public form: FormGroup;
  public itemSubmitted: boolean;

  displayedColumns: string[] = ['name', 'price', 'action'];

  constructor(private readonly itemFormService: ItemFormService) {}

  ngOnInit() {
    this.form = this.itemFormService.init();
  }

  addToCart() {
    window.alert('Added');
  }

  addNewItem(): void {
    this.itemSubmitted = true;
    if (this.form.invalid) {
      console.log(this.form.value);
    } else {
      this.dataSource.push(this.form.value);
    }
  }
}
