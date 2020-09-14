import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WFormalComponent } from './wformal.component';

describe('WFormalComponent', () => {
  let component: WFormalComponent;
  let fixture: ComponentFixture<WFormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WFormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WFormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
