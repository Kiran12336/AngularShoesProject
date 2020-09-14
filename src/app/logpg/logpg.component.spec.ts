import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogpgComponent } from './logpg.component';

describe('LogpgComponent', () => {
  let component: LogpgComponent;
  let fixture: ComponentFixture<LogpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
