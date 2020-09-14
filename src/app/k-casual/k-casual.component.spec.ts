import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KCasualComponent } from './k-casual.component';

describe('KCasualComponent', () => {
  let component: KCasualComponent;
  let fixture: ComponentFixture<KCasualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KCasualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KCasualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
