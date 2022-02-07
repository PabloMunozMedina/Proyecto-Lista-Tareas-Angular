import { TestBed } from '@angular/core/testing';

import { ListaNotasService } from './lista-notas.service';

describe('ListaNotasService', () => {
  let service: ListaNotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaNotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
