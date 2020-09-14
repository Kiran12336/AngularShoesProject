import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTraditionalComponent } from './mtraditional.component';

describe('MTraditionalComponent', () => {
  let component: MTraditionalComponent;
  let fixture: ComponentFixture<MTraditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTraditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTraditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
