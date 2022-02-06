import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpropertyComponent } from './postproperty.component';

describe('PostpropertyComponent', () => {
  let component: PostpropertyComponent;
  let fixture: ComponentFixture<PostpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
