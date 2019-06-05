import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from '../../models/item.interface';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient, private auth: AuthService) {}

  // creates header
  private _authHeader(): object {
    return {
      headers: new HttpHeaders({ authorization: `Bearer ${this.auth.getAccessToken()}` }),
    };
  }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API_URL + '/items');
  }

  public postItems(item: Item): Observable<Item> {
    return this.http.post<Item>(this.API_URL + '/items', item, this._authHeader());
  }

  public postToShoppingCart(): Observable<string> {
    return this.http.post<string>(this.API_URL + '/shopping-cart', '', this._authHeader());
  }
}
