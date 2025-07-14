import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTemplate } from './blog-template';

describe('BlogTemplate', () => {
  let component: BlogTemplate;
  let fixture: ComponentFixture<BlogTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
