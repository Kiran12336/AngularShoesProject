import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlgComponent } from './adminlg.component';

describe('AdminlgComponent', () => {
  let component: AdminlgComponent;
  let fixture: ComponentFixture<AdminlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
