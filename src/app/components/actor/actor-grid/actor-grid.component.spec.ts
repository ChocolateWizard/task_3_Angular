import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorGridComponent } from './actor-grid.component';

describe('ActorGridComponent', () => {
  let component: ActorGridComponent;
  let fixture: ComponentFixture<ActorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
