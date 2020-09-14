import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcasualComponent } from './wcasual.component';

describe('WcasualComponent', () => {
  let component: WcasualComponent;
  let fixture: ComponentFixture<WcasualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcasualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcasualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
