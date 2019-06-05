import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Item } from '../models/item.interface';
import { AuthService } from '../services/auth.service';
import { ItemFormService } from './services/item-form.service';
import { ItemsService } from './services/items.service';

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

  constructor(
    private readonly itemFormService: ItemFormService,
    private readonly authService: AuthService,
    private readonly itemService: ItemsService
  ) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.dataSource = items;
    });
    this.form = this.itemFormService.init();
  }

  addToCart() {
    this.itemService.postToShoppingCart().subscribe(
      response => {},
      error => {
        window.alert(error.error.message || error.error.text);
        console.log(error);
      }
    );
  }

  addNewItem(): void {
    this.itemSubmitted = true;

    if (!this.form.invalid) {
      this.itemService.postItems(this.form.value).subscribe(
        response => {
          window.location.reload();
        },
        error => {
          window.alert(error.error.message);
        }
      );
    }
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
