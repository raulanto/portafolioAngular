import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogbtnDark } from './blogbtn-dark';

describe('BlogbtnDark', () => {
  let component: BlogbtnDark;
  let fixture: ComponentFixture<BlogbtnDark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogbtnDark]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogbtnDark);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
