import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEstruc } from './blog-estruc';

describe('BlogEstruc', () => {
  let component: BlogEstruc;
  let fixture: ComponentFixture<BlogEstruc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogEstruc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogEstruc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
