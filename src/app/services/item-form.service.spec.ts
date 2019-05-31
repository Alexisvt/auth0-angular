import { TestBed } from '@angular/core/testing';

import { ItemFormService } from './item-form.service';

describe('ItemFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemFormService = TestBed.get(ItemFormService);
    expect(service).toBeTruthy();
  });
});
