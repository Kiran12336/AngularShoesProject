import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimgdetailComponent } from './viewimgdetail.component';

describe('ViewimgdetailComponent', () => {
  let component: ViewimgdetailComponent;
  let fixture: ComponentFixture<ViewimgdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimgdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimgdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
