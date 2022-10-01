import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedLayerFilterComponent } from './nested-layer-filter.component';

describe('NestedLayerFilterComponent', () => {
  let component: NestedLayerFilterComponent;
  let fixture: ComponentFixture<NestedLayerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedLayerFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedLayerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
