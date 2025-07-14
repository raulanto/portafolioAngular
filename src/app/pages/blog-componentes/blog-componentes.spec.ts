import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponentes } from './blog-componentes';

describe('BlogComponentes', () => {
  let component: BlogComponentes;
  let fixture: ComponentFixture<BlogComponentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogComponentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogComponentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
