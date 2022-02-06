import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypropComponent } from './myprop.component';

describe('MypropComponent', () => {
  let component: MypropComponent;
  let fixture: ComponentFixture<MypropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
