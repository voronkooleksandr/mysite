import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNewsComponent } from './technews.component';

describe('TechnewsComponent', () => {
  let component: TechNewsComponent;
  let fixture: ComponentFixture<TechNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
