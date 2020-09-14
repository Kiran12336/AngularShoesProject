import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McasualComponent } from './mcasual.component';

describe('McasualComponent', () => {
  let component: McasualComponent;
  let fixture: ComponentFixture<McasualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McasualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McasualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
