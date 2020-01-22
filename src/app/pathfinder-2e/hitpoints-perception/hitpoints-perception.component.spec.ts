import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitpointsPerceptionComponent } from './hitpoints-perception.component';

describe('HitpointsPerceptionComponent', () => {
  let component: HitpointsPerceptionComponent;
  let fixture: ComponentFixture<HitpointsPerceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitpointsPerceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitpointsPerceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
