import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KFormalComponent } from './k-formal.component';

describe('KFormalComponent', () => {
  let component: KFormalComponent;
  let fixture: ComponentFixture<KFormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KFormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KFormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
