import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptestComponent } from './apptest.component';

describe('ApptestComponent', () => {
  let component: ApptestComponent;
  let fixture: ComponentFixture<ApptestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
