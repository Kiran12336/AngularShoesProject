import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KTarditinalComponent } from './k-tarditinal.component';

describe('KTarditinalComponent', () => {
  let component: KTarditinalComponent;
  let fixture: ComponentFixture<KTarditinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KTarditinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KTarditinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
