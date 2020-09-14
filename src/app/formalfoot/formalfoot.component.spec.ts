import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalfootComponent } from './formalfoot.component';

describe('FormalfootComponent', () => {
  let component: FormalfootComponent;
  let fixture: ComponentFixture<FormalfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormalfootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
