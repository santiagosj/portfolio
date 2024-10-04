import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecounterComponent } from './pagecounter.component';

describe('PagecounterComponent', () => {
  let component: PagecounterComponent;
  let fixture: ComponentFixture<PagecounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagecounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagecounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
