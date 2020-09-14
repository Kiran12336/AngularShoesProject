import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WTraditionalComponent } from './wtraditional.component';

describe('WTraditionalComponent', () => {
  let component: WTraditionalComponent;
  let fixture: ComponentFixture<WTraditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WTraditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WTraditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
