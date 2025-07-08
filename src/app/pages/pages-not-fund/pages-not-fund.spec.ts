import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesNotFund } from './pages-not-fund';

describe('PagesNotFund', () => {
  let component: PagesNotFund;
  let fixture: ComponentFixture<PagesNotFund>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesNotFund]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesNotFund);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
