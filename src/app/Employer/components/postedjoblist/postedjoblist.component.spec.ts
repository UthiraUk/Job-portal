import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedjoblistComponent } from './postedjoblist.component';

describe('PostedjoblistComponent', () => {
  let component: PostedjoblistComponent;
  let fixture: ComponentFixture<PostedjoblistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedjoblistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedjoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
