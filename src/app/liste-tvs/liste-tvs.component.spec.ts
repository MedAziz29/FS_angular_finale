import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTvsComponent } from './liste-tvs.component';

describe('ListeTvsComponent', () => {
  let component: ListeTvsComponent;
  let fixture: ComponentFixture<ListeTvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTvsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
