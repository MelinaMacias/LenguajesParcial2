import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCampanaComponent } from './detalle-campana.component';

describe('DetalleCampanaComponent', () => {
  let component: DetalleCampanaComponent;
  let fixture: ComponentFixture<DetalleCampanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCampanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCampanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
